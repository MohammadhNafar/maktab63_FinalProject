import React from 'react';
import {useEffect, useState , useRef} from 'react';
import lottie from 'lottie-web';
import Styles from './faild.module.css';
import { Link } from 'react-router-dom';
const PaymentfailPage = () => {
    const container = useRef(null)
    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../../../assets/lottie/pay/fail/97670-tomato-error.json')
        })
    },[])
    return (
        <div className={Styles.wrapper} >
        <div className={Styles.animation} ref={container} >
           
        </div>
        <h1 className={Styles.randomNum} > پرداخت موفقیت آمیز نبود ! </h1>
       <Link className={Styles.Link} to='/' >
       <h1 className={Styles.back}> صفحه اصلی </h1>
       </Link> 
    </div>
    );
}

export default PaymentfailPage;
