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
                          <p> نام کاربر : <span className={Styles.spans}>{modalData.name} </span>  </p> 
                          <p> کالا ها  : <span className={Styles.spans}> {modalData.products}</span>  </p> 
                        <p>{""} زمان ثبت سفارش : <span className={Styles.spans}> {modalData.date} </span> </p> 
                        <p>{""} شماره تماس : <span className={Styles.spans}> {modalData.phone}</span>  </p> 
                        <p>{""} ایمیل : <span className={Styles.spans}> {modalData.email} </span> </p> 
                        <p>{""} نشانی : <span className={Styles.spans}> {modalData.address} </span> </p> 
                    
                        </div>
                        <div className={Styles.modalFooter}>
                            <div className={Styles.footerItems}>
                            <p>{""} مجموع کالا ها : <span className={Styles.spans}> {modalData.totalItems} </span> </p> 
                        <p>{""} وضعیت تحویل : <span className={Styles.spans}>{modalData.status} </span>  </p>
                        <p>{""} مبلغ کل :  <span className={Styles.spans}> {modalData.totalPrice}</span> </p>

                            </div>
                     
                        </div>
                    
                    
                   
                </div>

            </div>
        </div>
    );
    }
    
export default OrdersmodalComponent;
