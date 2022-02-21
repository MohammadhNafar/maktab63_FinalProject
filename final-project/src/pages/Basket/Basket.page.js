import React from 'react';
import Header from '../../layouts/user/header/Header';
import Styles from './basket.module.css';
import Table from './Components/Table/Basket.table.component';

const BasketPage = () => {
    return (
        <div className={Styles.container}>
            <Header/>
            <hr className={Styles.hrHeader}></hr>
            <div className={Styles.h1Head} >
            <h1 >
                سبد خرید
            </h1>
            </div>
            
            <div className={Styles.wrapper}>
            <div className={Styles.tableHead}>
            <h1>
                    </h1>
                    <h1>تعداد</h1>
                    <h1>قیمت</h1>
                    <h1>نام کالا
                    </h1>
                    

                </div>
                <Table
                product = 'شیر'
                price = '12000'
                count = '23'
                />
                <button className={Styles.confirmBtn}>
                    نهایی کردن خرید
                </button>

            </div>
        </div>
    );
}

export default BasketPage;
