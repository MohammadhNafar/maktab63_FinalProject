import React, { useState } from 'react';
import Styles from './addModal.module.css';
import http from '../../../../../services/http.service';

const Addmodal = (props) => {
    const [name, setname] = useState([])
    const [brand, setbrand] = useState([])
    const [price, setprice] = useState([])
    const [category, setcategory] = useState([])
    const [count, setcount] = useState([])




    async function addProduct(e)
    {
        console.log(name,brand,price,category)
        
        let result = http.post('http://localhost:3002/products' , {
            name,
            brand,
            price,
            category,
            count
        })
        result = await result.json();
        
    }
    
    return (
        <div className={Styles.container}>
          
        
            <div className={Styles.modalBox}>
                <div className={Styles.closeBtn}>

                <button onClick={() => props.closeModal(false)} >x</button>

                </div>
                <div className={Styles.title}>
                <h1>
                    اضافه کردن کالا
                </h1>
                </div>
                <div className={Styles.items}>
                    <form>
                    <input 
                    onChange={(e) => setname(e.target.value)}
                     placeholder= "نام کالا" type='text'></input>

                    <input
                    onChange={(e) => setbrand(e.target.value)}
                    
                    placeholder= "نام برند " type='text' ></input>

                    <input
                    onChange={(e) => setprice(e.target.value)}
                    placeholder= "قیمت " type='number'></input>
                     <input
                    onChange={(e) => setcategory(e.target.value)}
                    placeholder= "گروه" type='text'></input>

                    <input
                     onChange={(e) => setcount(e.target.value)}
                    placeholder= "تعداد" type='text'></input>

                    <input placeholder= "عکس" type='file'></input>



                    <button  onClick={addProduct}  > اضافه کردن کالا </button>
                    </form>
                    
                </div>

            </div>
        </div>
    );
}


export default Addmodal;