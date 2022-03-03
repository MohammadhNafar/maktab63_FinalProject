import React from 'react';
import Styles from './ordersModal.module.css';
import {connect} from 'react-redux';
import {useDispatch, useSelector } from 'react-redux';
import { useEffect,useState } from 'react';

const OrdersmodalComponent = (props) => {
    const dispatch = useDispatch();
    const modalData = useSelector(state => state.orders.modal)
    const statusData = useSelector(state => state.orders.modal.status)
    const [status, setStatus] = useState([])
    setStatus(statusData);
    console.log(modalData.status)
    console.log(modalData)

    // const handleStatusChange = () => {
    //     // if(modalData.status === 0){
    //     //     setStatus(1)
    //     // }
    //     console.log(modalData.status)
    // };
       





    useEffect(() => {
       
    }, [])
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
                        <button
                       
                         className={Styles.recive} >تحویل سفارش</button>
                        <div className={Styles.modalFooter}>
                            <div className={Styles.footerItems}>
                            <p>{""} مجموع کالا ها : <span className={Styles.spans}> {modalData.totalItems} </span> </p>
                            {modalData.status ==='0'?  <p>{""} وضعیت تحویل : <span className={Styles.spans}> تحویل شد</span>  </p> :
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
