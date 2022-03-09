import React from 'react';
import lottie from 'lottie-web';
import { useSelector ,useDispatch} from 'react-redux'
import {useEffect, useState , useRef} from 'react';
import styles from './success.module.css';
import { Link } from 'react-router-dom';
const PaymentsuccessPage = () => {
    const container = useRef(null)
    const dispatch = useDispatch();
    const productsNew = useSelector(state => state.shop.cart);
    useEffect(()=>{
        
       
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../../../assets/lottie/pay/sucees/89618-gopay-succesfull-payment.json')
        })
    },[])
    let foo = '';
        for(let i=0; i<10; ++i) foo += Math.floor(Math.random() * 7);
    return (
        <div className={styles.wrapper} >
            <div className={styles.animation} ref={container} >
               
            </div>
            <h1 className={styles.randomNum} > پرداخت موفقیت آمیز بود ! <br/>کد پیگیری : <span className={styles.random} >{foo} </span> </h1>
           <Link className={styles.Link} to='/' >
           <h1 className={styles.back}> صفحه اصلی </h1>
           </Link> 
        </div>
    );
}

export default PaymentsuccessPage;
