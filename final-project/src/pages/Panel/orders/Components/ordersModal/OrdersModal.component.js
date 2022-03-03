import React from 'react';
import Styles from './ordersModal.module.css';
import {connect} from 'react-redux';
import {useDispatch, useSelector } from 'react-redux';

const OrdersmodalComponent = (props) => {
   
    const modalData = useSelector(state => state.orders.modal)
    console.log(modalData)
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
                          <h3> نام کاربر : {modalData.name}  </h3> 
                          <h3> کالا ها  : {modalData.products}  </h3> 
                        <h3>{""} زمان ثبت سفارش : {modalData.date} </h3> 
                        <h3>{""} شماره تماس :{modalData.phone}  </h3> 
                        <h3>{""} ایمیل : {modalData.email} </h3> 
                        <h3>{""} نشانی : {modalData.address} </h3> 
                        <h3>{""} مجموع کالا ها : {modalData.totalItems} </h3> 
                        <h3>{""} مبلغ کل : {modalData.totalPrice} </h3>
                        <h3>{""} وضعیت تحویل : {modalData.status} </h3>
                        </div>
                    
                    
                   
                </div>

            </div>
        </div>
    );
    }
    
export default OrdersmodalComponent;
