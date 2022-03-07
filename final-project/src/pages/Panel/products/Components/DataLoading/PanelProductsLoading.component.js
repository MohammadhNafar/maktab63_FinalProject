import React from 'react';
import lottie from 'lottie-web';
import {useEffect, useState, useRef} from 'react';
import styles from './PanelProductsLoading.module.css'
const PanelproductsloadingComponent = () => {

    const container = useRef(null)
    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../../../assets/lottie/listnewloading/81883-greeking-table-dekstop.json')
        })
    },[])



    return (
        <div className={styles.wrapper}>
        <div className={styles.animation} ref={container}>
           
       </div>
   </div>
    );
}

export default PanelproductsloadingComponent;