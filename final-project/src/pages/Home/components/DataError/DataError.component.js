import React from 'react';
import lottie from 'lottie-web';
import {useEffect, useState, useRef} from 'react';
import styles from './DataError.module.css'
const DataerrorComponent = () => {
    const container = useRef(null)
    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../../assets/lottie/fixing/36572-under-maintenance.json')
        })
    },[])

    const tryAgain = () => {
        window.location.reload();
        console.log('try again')
    }

    return (
        <div className={styles.wrapper}>
             <div className={styles.animation} ref={container}>
            <h1 >!دریافت اطلاعات با خطا مواجه شد</h1>
         

            </div>
            <button
            onClick={tryAgain}
             className={styles.tryAgain} >تلاش مجدد</button>
        </div>
    );
}

export default DataerrorComponent;
