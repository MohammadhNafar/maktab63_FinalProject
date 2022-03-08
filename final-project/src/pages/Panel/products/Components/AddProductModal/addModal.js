import React, { useState } from 'react';
import Styles from './addModal.module.css';
import http from '../../../../../services/http.service';
import { imageUpload } from '../../../../../api/uploadImage.api';

const Addmodal = (props) => {

    const [name, setname] = useState([])
    const [brand, setbrand] = useState([])
    const [price, setprice] = useState([])
    const [category, setcategory] = useState([])
    const [count, setcount] = useState([])
    const [description, setdescription] = useState([])

    const [images, setImages] = useState(null)

    async function addProduct(e) {
        e.preventDefault();
        console.log(e.target.images.files[0])

        let form = new FormData();
        form.append('image', e.target.images.files[0])

        const reqConfig = {
            headers: {
                'content-type': 'multipart/form-data',
                'token': localStorage.getItem('ACCESS_TOKEN')
            }
        }
        imageUpload(form, reqConfig).then(res => {
            console.log(res.data.filename)
            let result = http.post('http://localhost:3002/products', {
                name,
                brand,
                price,
                category,
                count,
                description,
                image: res.data.filename
            })
            console.log(result)
        })

        console.log(name, brand, price, category, images, count)

    }

    return (
        <div className={Styles.container}>

            <div className={Styles.modalBox}>
                <div className={Styles.closeBtn}>

                    <button onClick={() => props.closeModal(false)}>x</button>

                </div>
                <div className={Styles.title}>
                    <h1>
                        اضافه کردن کالا
                    </h1>
                </div>
                <div className={Styles.items}>
                    <form onSubmit={addProduct}>
                        <input
                            onChange={(e) => setname(e.target.value)}
                            className={Styles.inputStyle}
                            placeholder="نام کالا"
                            type='text'></input>

                        <input
                            onChange={(e) => setbrand(e.target.value)}
                            className={Styles.inputStyle}
                            placeholder="نام برند "
                            type='text'></input>

                        <input
                            onChange={(e) => setprice(e.target.value)}
                            className={Styles.inputStyle}
                            placeholder="قیمت "
                            type='number'></input>

                        <input
                            onChange={(e) => setcategory(e.target.value)}
                            className={Styles.inputStyle}
                            placeholder="گروه"
                            type='text'></input>
                            
                            <input
                            onChange={(e) => setdescription(e.target.value)}
                            className={Styles.inputDec}
                            placeholder="توضیحات کالا"
                            type='text'></input>

                        <input
                            onChange={(e) => setcount(e.target.value)}
                            className={Styles.inputStyleNum}
                            placeholder="تعداد"
                            type='number'></input>


                        <input
                            name="images"
                            id='images'
                            type='file'
                            className={Styles.inputStyleFile}
                            placeholder="عکس"/>

                        <button className={Styles.btn}>
                            اضافه کردن کالا
                        </button>
                    </form>

                </div>

            </div>
        </div>
    );
}

export default Addmodal;
