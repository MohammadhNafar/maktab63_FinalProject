import { useEffect, useState } from 'react';
import styles from './ordersModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus } from "../../../../../redux/Orders/orders-actions"
import axios from 'axios';
import BASE_URL from '../../../../../configs/variable.config'
const OrdersmodalComponent = (props) => {
    const dispatch = useDispatch();
    const modalData = useSelector(state => state.orders.modal)
    const statusData = useSelector(state => state.orders.modal.status)
    const set = (data) => {
        console.log(data)
        dispatch(changeStatus(true))
        const tempOrder = {
            ...data,
            status : true
        }
        axios.put(`${BASE_URL}/orders/`+tempOrder.id,tempOrder).then 
        (res => {
            dispatch(changeStatus())
            console.log(res)
            props.closeModal(false)
        })
    }


    const back = (data) => {
        console.log(data)
        dispatch(changeStatus(false))
        const tempOrder = {
            ...data,
            status : false
        }
        axios.put(`${BASE_URL}/orders/`+tempOrder.id,tempOrder).then
        (res => {
            dispatch(changeStatus())
            console.log(res)
            props.closeModal(false)
        })
    }
 

    return (
        <div className={styles.container}>

            <div className={styles.modalBox}>
                <div className={styles.closeBtn}>

                    <button onClick={() => props.closeModal(false)} >x</button>

                </div>
                <div className={styles.title}>
                    <h1>
                        اطلاعات سفارش
                    </h1>
                </div>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <p> نام کاربر : <span className={styles.spans}>{modalData.name} </span>  </p>
                        <p> کالا ها  : <span className={styles.spans}> {modalData.products}</span>  </p>
                        <p>{""} تاریخ دریافت : <span className={styles.spans}> {modalData.date} </span> </p>
                        <p>{""} تاریخ ثبت سفارش : <span className={styles.spans}> {modalData.createdAt}</span>  </p>
                        <p>{""} شماره تماس : <span className={styles.spans}> {modalData.phone}</span>  </p>
                        <p>{""} ایمیل : <span className={styles.spans}> {modalData.email} </span> </p>
                        <p>{""} نشانی : <span className={styles.spans}> {modalData.address} </span> </p>

                    </div>
                    {statusData == true ?  <button
                     onClick={() => back(modalData)}
                     className={styles.recive} >برگشت سفارش</button> : 
                     <button
                     onClick={() => set(modalData)}
                     className={styles.recive} >تحویل سفارش</button>}
                   
                    <div className={styles.modalFooter}>
                        <div className={styles.footerItems}>
                            <p>{""} مجموع کالا ها : <span className={styles.spans}> {modalData.totalItems} </span> </p>
                            {statusData == true ? <p>{""} وضعیت تحویل : <span className={styles.spans}> تحویل شد</span>  </p> :
                                <p>{""} وضعیت تحویل : <span className={styles.spans}> در انتظار تحویل </span>  </p>

                            }

                            <p>{""} مبلغ کل :  <span className={styles.spans}> {modalData.totalPrice}</span> </p>

                        </div>

                    </div>



                </div>

            </div>
        </div>
    );
}

export default OrdersmodalComponent;
