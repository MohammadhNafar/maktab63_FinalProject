

import React, { useState } from 'react';
import styles from './addModal.module.css';
import http from '../../../../../services/http.service';
import { imageUpload } from '../../../../../api/uploadImage.api';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import BASE_URL from '../../../../../configs/variable.config';

const Addmodal = (props) => {
    
    const [name, setname] = useState([])
    const [brand, setbrand] = useState([])
    const [price, setprice] = useState([])
    const [category, setcategory] = useState([])
    const [count, setcount] = useState([])
    const [description, setDescription] = useState('');
    
    const describeChange =( event, editor ) => {
        const describeData = editor.getData();
        setDescription(describeData)
      }




    const [images, setImages] = useState(null)

    async function addProduct(e) {
        e.preventDefault();
        

        let form = new FormData();
        form.append('image', e.target.images.files[0])
        form.append('description', description);

        const reqConfig = {
            headers: {
                'content-type': 'multipart/form-data',
                'token': localStorage.getItem('ACCESS_TOKEN')
            }
        }
        imageUpload(form, reqConfig).then(res => {
            
            let result = http.post(`${BASE_URL}/products`, {
                name,
                brand,
                price,
                category,
                count,
                description,
                image: res.data.filename
            })
            props.closeModal(false)
            http.post(`${BASE_URL}/categorys`, {
                category
        })

            
        })
       

        

    }

    return (
        <div className={styles.container}>

            <div className={styles.modalBox}>
                <div className={styles.closeBtn}>

                    <button onClick={() => props.closeModal(false)}>x</button>

                </div>
                <div className={styles.title}>
                    <h1>
                        اضافه کردن کالا
                    </h1>
                   
                </div>
                <div className={styles.items}>
                    <form onSubmit={addProduct}>
                        <input
                            onChange={(e) => setname(e.target.value)}
                            className={styles.inputStyle}
                            placeholder="نام کالا"
                            type='text'></input>

                        <input
                            onChange={(e) => setbrand(e.target.value)}
                            className={styles.inputStyle}
                            placeholder="نام برند "
                            type='text'></input>

                        <input
                            onChange={(e) => setprice(e.target.value)}
                            className={styles.inputStyle}
                            placeholder="قیمت "
                            type='number'></input>

                        <input
                            onChange={(e) => setcategory(e.target.value)}
                            className={styles.inputStyle}
                            placeholder="گروه"
                            type='text'></input>
                      
                        <input
                            onChange={(e) => setcount(e.target.value)}
                            className={styles.inputStyleNum}
                            placeholder="تعداد"
                            type='number'></input>


                        <input
                            name="images"
                            id='images'
                            type='file'
                            className={styles.inputStyleFile}
                            placeholder="عکس"/>
      
                      

                            <CKEditor
                                    editor={ ClassicEditor }
                                    name="description"
                                    config={{ language : 'fa' }}
                                    onChange={ describeChange }
                              />


                        <button className={styles.btn}>
                            اضافه کردن کالا
                        </button>
                    </form>

                </div>

            </div>
        </div>
    );
}

export default Addmodal;
