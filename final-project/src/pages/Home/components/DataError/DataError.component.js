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

    return (
        <div className={styles.wrapper}>
             <div className={styles.animation} ref={container}>
            <h1 >مشکلی پیش آمده لطفا بعدا تلاش کنید</h1>
            </div>
        </div>
    );
}

export default DataerrorComponent;
