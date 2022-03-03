import React from 'react';
import Table from './Components/ordersTable/ordersTable.component';
import Styles from './orders.module.css';
import Header from '../../../layouts/manage/header/Header';
import {useEffect, useState} from 'react';
import {getOrders} from '../../../api/orders.api'
import { useDispatch, useSelector } from 'react-redux';
import {fetchOrders} from '../../../redux/Orders/orders.thunk'
import Modal from './Components/ordersModal/OrdersModal.component';

const OrdersPage = () => {
    const proOrders = useSelector(state => state.orders)
    const loading = proOrders.loading
    const error = proOrders.error
    const ordersNew = useSelector(state => state.orders.orders.data)
    console.log(ordersNew ,"orders" )
    // const [rows, setRows] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [filteredData, setFilter] = useState([])
    const dispatch = useDispatch();
    // const reqConfig = {
    //     headers: {
    //         'content-type': 'application/json',
    //         'token': localStorage.getItem('ACCESS_TOKEN')
    //     }
    // }

    useEffect(() => {
        dispatch(fetchOrders())
        // getOrders(reqConfig).then(data => setRows(data.data))

    }, [])
    return (
        <div>
            <Header/>
            <div className={Styles.buttons}>
                <button
                    onClick={(e) => {

                        e.preventDefault();

                        // setFilter(rows.filter(item => item.status = 1))

                    }}>
                    سفارش های تحویل شده</button>
                <button>سفارش های در انتظار ارسال</button>

            </div>
            <div className={Styles.title}>
                <h1>سفارش ها
                </h1>
            </div>

            <div className={Styles.tableHead}>
                <h1></h1>
                <h1>زمان ثبت سفارش
                </h1>
                <h1>مبلغ
                </h1>
                <h1>نام کاربر</h1>

            </div>
            
             
                     { ordersNew.map(
                         data => <Table
                             key={data.id}
                             name={data.name}
                             date={data.date}
                             price={data.totalPrice}
                         show = {setOpenModal}
                            
                           />

                   )
            }

            {
                openModal && <Modal
                        
                        closeModal={setOpenModal}/>
            }

        </div>
    );
}

export default OrdersPage;
