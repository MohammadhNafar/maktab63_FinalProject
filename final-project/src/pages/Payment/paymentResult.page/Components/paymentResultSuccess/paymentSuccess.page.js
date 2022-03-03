import React from 'react';
import lottie from 'lottie-web';
import {useEffect, useState , useRef} from 'react';
import Styles from './success.module.css';
import { Link } from 'react-router-dom';
const PaymentsuccessPage = () => {
    const container = useRef(null)
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
        <div className={Styles.wrapper} >
            <div className={Styles.animation} ref={container} >
               
            </div>
            <h1 className={Styles.randomNum} > پرداخت موفقیت آمیز بود ! <br/>کد پیگیری : <span className={Styles.random} >{foo} </span> </h1>
           <Link className={Styles.Link} to='/' >
           <h1 className={Styles.back}> صفحه اصلی </h1>
           </Link> 
        </div>
    );
}

export default PaymentsuccessPage;
