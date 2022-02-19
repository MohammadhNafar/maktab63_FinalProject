import React from 'react';
import Header from '../../layouts/user/header/Header';
import Styles from './Product.module.css';
import BuyCard from './Components/buyCard/BuyCard.component';
import {getComments} from '../../api/comments.api';
import {useEffect, useState} from 'react';

import Comments from './Components/Coments/Comments.component';
import IMG from '../../assets/images/productsImage/kisspng-cream-chocolate-spread-nutella-white-chocolate-nutella-crepe-5b1a06b75d0bc6.8532377415284323113811.png';
const ProductPage = () => {

    const  [rows, setRows] = useState([]);
    useEffect(() => {
        getComments().then(data => setRows(data.data) )
        console.log(rows,'hello')
        //localStorage.setItem('loggedin', 'false')

      }, [])
      const datas = rows;
    return (

        <div className={Styles.container}>
            <Header/>
            <hr className={Styles.hrHeader}></hr>

            <div className={Styles.body}>
            <div className={Styles.levels} >محصولات/شکلات</div>

            <div className={Styles.productSec}>

                <div className={Styles.information} >
                    <div className={Styles.images}>
                <img className={Styles.productIMG} src={IMG}></img>
                <div className={Styles.littles}>
                <img className={Styles.productLittleImg} src={IMG}></img>
                <img className={Styles.productLittleImg} src={IMG}></img>
                <img className={Styles.productLittleImg} src={IMG}></img>
                </div>
                
                </div>
                <div className={Styles.center}>

                <h1>
                        نام کالا
                    </h1>
                    <p>
                        توضیحات
                    </p>
                    <div className={Styles.centerQuantitySec}>

                    <input className={Styles.quantityInput} type='number' ></input>  تعداد 

                    </div>
                </div>
                   

                </div>
                <BuyCard
                price = '2000'
                />
            </div>

            </div>
            <hr></hr>
            <h1 className={Styles.nazarat}>
                نظرات
            </h1>
{
    datas.map(
        data =>
        <Comments
        key = {data.id}
        score = {data.score}
        username = {data.username1}
        userComment = {data.comm}
        
        
        />

    )
}
        

        </div>
    );
}

export default ProductPage;

