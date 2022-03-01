import React from 'react';
import Header from '../../layouts/user/header/Header';
import Styles from './checkout.module.css'
const CheckoutPage = () => {
    return (
        <div className={Styles.container} >
            <Header/>
            
            <hr className={Styles.hrHeader}></hr>
            <div className={Styles.h1Head}>
                <h1 >
                    تکمیل اطلاعات
                </h1>
            </div>
        </div>
    );
}

export default CheckoutPage;
