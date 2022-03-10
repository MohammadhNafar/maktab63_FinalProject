import React from 'react';
import styles from './notFound.module.css';
import Header from '../../layouts/user/header/Header';
import IMG from '../../assets/images/404NotFound.png';
import {Link} from 'react-router-dom';
import lottie from 'lottie-web';
import {useEffect, useState , useRef} from 'react';
import RainAnimation from '../../assets/lottie/rain/53484-digital-clouds-rain.json';
import Footer from '../../layouts/user/footer/Footer';

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
            <div className={styles.animation} ref={container}>

            </div>
            <div className={styles.notFoundWrapper}>
                    {/* <div  className={styles.notFoundImage}>

                        
                    </div> */}
                    <h1 className={styles.notFoundTxt} >صفحه مورد نظر پیدا نشد !</h1>

                    <Link className={styles.notFoundLink} to="/" >
                        <h1 className={styles.notFoundH1}> صفحه اصلی  </h1>
                        </Link>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default NotfoundPage;
