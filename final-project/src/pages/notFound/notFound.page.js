import React from 'react';
import Styles from './notFound.module.css';
import Header from '../../layouts/user/header/Header';
import IMG from '../../assets/images/404NotFound.png';
import {Link} from 'react-router-dom';
import lottie from 'lottie-web';
import {useEffect, useState , useRef} from 'react';
import RainAnimation from '../../assets/lottie/rain/53484-digital-clouds-rain.json';


const NotfoundPage = () => {
    const container = useRef(null)
    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/lottie/rain/53484-digital-clouds-rain.json')
        })
    },[])
    return (
        <div>
            <Header/>
            <div className={Styles.animation} ref={container}>

            </div>
            <div className={Styles.notFoundWrapper}>
                    <div  className={Styles.notFoundImage}>

                        
                    </div>
                    <h1>صفحه مورد نظر پیدا نشد !</h1>

                    <Link className={Styles.notFoundLink} to="/" >
                        <h1> صفحه اصلی  </h1>
                        </Link>
            </div>
            
        </div>
    );
}

export default NotfoundPage;
