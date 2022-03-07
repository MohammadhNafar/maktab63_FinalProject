import React from 'react';
import styles from './ProductLoading.module.css'
import lottie from 'lottie-web';
import {useEffect, useState, useRef} from 'react';

const ProductloadingComponent = () => {

    const container = useRef(null)
    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../../assets/lottie/singleLoading/94706-loader-graph-placeholder.json')
        })
    },[])








    return (
          <div className={styles.wrapper}>
             <div className={styles.animation} ref={container}>
                
            </div>
        </div>
    );
}

export default ProductloadingComponent;
