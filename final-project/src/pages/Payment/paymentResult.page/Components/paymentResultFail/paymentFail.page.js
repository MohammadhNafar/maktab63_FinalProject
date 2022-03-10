import React from 'react';
import {useEffect, useState , useRef} from 'react';
import lottie from 'lottie-web';
import styles from './faild.module.css';
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
        <div className={styles.wrapper} >
        <div className={styles.animation} ref={container} >
           
        </div>
        <h1 className={styles.randomNum} > پرداخت موفقیت آمیز نبود ! </h1>
       <Link className={styles.Link} to='/' >
       <h1 className={styles.back}> صفحه اصلی </h1>
       </Link> 
    </div>
    );
}

export default PaymentfailPage;
