import React from 'react';
import Styles from './empty.module.css'
import {useEffect, useState , useRef} from 'react';
import lottie from 'lottie-web';


const EmptyBasketComponent = () => {
    const container = useRef(null)
    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../../assets/lottie/cart/16982-shopping-loader.json')
        })
    },[])
    return (
        <div className={Styles.container}>
            <h1>چیزی برای نمایش وجود ندارد</h1>
        <div className={Styles.animations} ref={container} >
            
        </div>
        
        </div>
    );
}

export default EmptyBasketComponent;
