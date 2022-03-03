import React from 'react';
import Styles from './ordersModal.module.css';

const OrdersmodalComponent = (props) => {
    return (
        <div className={Styles.container}>
        
            <div className={Styles.modalBox}>
                <div className={Styles.closeBtn}>

                <button onClick={() => props.closeModal(false)} >x</button>

                </div>
                <div className={Styles.title}>
                <h1>
                    اطلاعات سفارش
                </h1>
                </div>
                <div className={Styles.items}>
                    <div className={Styles.item}>
                        <h3>{""} زمان ثبت سفارش : </h3> 
                        <h3>{""} شماره تماس : </h3> 
                        <h3>{""} نشانی : </h3> 
                        <h3>{""} مجموع کالا ها : </h3> 
                        <h3>{""} مبلغ کل : </h3>
                        <h3>{""} وضعیت تحویل : </h3>
                        </div>
                    
                    
                   
                </div>

            </div>
        </div>
    );
    }
export default OrdersmodalComponent;
