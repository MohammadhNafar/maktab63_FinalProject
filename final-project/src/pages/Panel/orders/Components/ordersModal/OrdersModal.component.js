import { useEffect, useState } from 'react';
import Styles from './ordersModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus } from "../../../../../redux/Orders/orders-actions"
import axios from 'axios';

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
        axios.put('http://localhost:3002/orders/'+tempOrder.id,tempOrder).then 
        (res => {
            dispatch(changeStatus())
            console.log(res)
            props.closeModal(false)
        })
    }
 

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
                    {statusData == true ?  "" : 
                     <button
                     onClick={() => set(modalData)}
                     className={Styles.recive} >تحویل سفارش</button>}
                   
                    <div className={Styles.modalFooter}>
                        <div className={Styles.footerItems}>
                            <p>{""} مجموع کالا ها : <span className={Styles.spans}> {modalData.totalItems} </span> </p>
                            {statusData == true ? <p>{""} وضعیت تحویل : <span className={Styles.spans}> تحویل شد</span>  </p> :
                                <p>{""} وضعیت تحویل : <span className={Styles.spans}> در انتظار تحویل </span>  </p>

                            }

                            <p>{""} مبلغ کل :  <span className={Styles.spans}> {modalData.totalPrice}</span> </p>

                        </div>

                    </div>



                </div>

            </div>
        </div>
    );
}

export default OrdersmodalComponent;
