import { useEffect, useState } from 'react';
import {editData} from '../../../../../api/panel.api'
import { useDispatch, useSelector } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import styles from './editmodal.module.css'
const Editmodal = (props) => {
    const dispatch = useDispatch();
    const modalData = useSelector(state => state.shop.modal);
    const [name , setName] = useState(modalData.name);
    const [brand , setBrand] = useState(modalData.brand);
    const [price , setPrice] = useState(modalData.price);
    const [count, setCount] = useState(modalData.count);
    const [category, setCategory] = useState(modalData.category);
    const [description, setdescription] = useState(modalData.description);

    let image = modalData.image;
    let id = modalData.id;
    console.log("pic",image)
    console.log(id)
    console.log("modaldata", modalData.nameList)
    useEffect (() => {
        console.log("modalData", modalData)
        
    },[modalData])

    const handleEdit = (e) => {
        props.closeModal(false)
        console.log("hello")
        const data = {...modalData};
        data.name = name;
        data.brand = brand;
        data.price = price;
        data.count = count;
        data.category = category;
        data.description = description;
        data.image =image;
        try {  
            editData({id ,data})
            .then(res => {
                console.log(res);
            })
        } catch (e) {
            return Promise.reject(e)
        }

    }

  
    return (
        <div className={styles.container}>

            <div className={styles.modalBox}>
                <div className={styles.closeBtn}>

                    <button onClick={() => props.closeModal(false)} >x</button>

                </div>
                <form className={styles.formEdit} onSubmit={handleEdit} >

                
                <div className={styles.title}>
                    <h1>
                       ویرایش  {modalData.name}
                    </h1>
                </div>
                <div className={styles.items}>
                    <div className={styles.item}>
                    
                        <p> نام کالا :  <input className={styles.inputs} name='name'  
                        onChange={(e) => setName(e.target.value)}
                        required
                        value={name}
                        />  </p>
                          <p> گروه کالا :  <input className={styles.inputs} name='category'  
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        value={category}
                        />  </p>
                        <p>  برند کالا :  <input className={styles.inputs} name='brand'
                         onChange={(e) => setBrand(e.target.value)}
                         value={brand}
                         required
                        />  </p>
                        <p>  قیمت کالا :  <input className={styles.inputs} name = 'price' 
                         onChange={(e) => setPrice(e.target.value)}
                            value={price}
                         required
                        /> </p>
                        <p>  موجودی: <input className={styles.inputs} name = 'count' 
                         onChange={(e) => setCount(e.target.value)}
                            value={count}
                         required
                        />  </p>
                         {/* <h2 className={styles.descH2} >  توضیحات:  </h2>
                         <textarea className={styles.desc} name = 'description' 
                         onChange={(e) => setdescription(e.target.value)}
                            value={description}
                         required
                        />  */}
                        <div className={styles.descr}>
                        <CKEditor
                    editor={ ClassicEditor }
                    data={description}
                        
                    onChange={(e) => setdescription(e.target.value)}
                  
                   
                />
                        </div>
                   

                    </div>
                   <div className={styles.btns}>
                   <button type='submit' >ویرایش کالا</button>
               
                   </div>

                </div>
                </form>
       
                
            </div>
        </div>
    );
}


export default Editmodal;
