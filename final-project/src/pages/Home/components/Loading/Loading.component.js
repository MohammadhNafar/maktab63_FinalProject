import React from 'react';

import lottie from 'lottie-web';
import {useEffect, useState, useRef} from 'react';
import styles from './Loading.module.css'
const LoadingComponent = () => {
    const container = useRef(null)
    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../../assets/lottie/loading/96894-skeleton-loading-6.json')
        })
    },[])

    return (
          <div className={styles.wrapper}>
             <div className={styles.animation} ref={container}>
                
            </div>
        </div>
    );
}

export default LoadingComponent;
