import React from 'react';
import Table from './Components/ordersTable/ordersTable.component';
import Styles from './orders.module.css';
import Header from '../../../layouts/manage/header/Header';
import {useEffect, useState} from 'react';
import {getOrders} from '../../../api/orders.api'
import Modal from '../../../Components/Modal/modal.page';

const OrdersPage = () => {

    const [rows, setRows] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [filteredData, setFilter] = useState([])
    const reqConfig = {
        headers: {
            'content-type': 'application/json',
            'token': localStorage.getItem('ACCESS_TOKEN')
        }
    }

    useEffect(() => {
        // getOrders().then(data => setRows(data.data))
        // console.log(rows, 'hello from orders')
        getOrders(reqConfig).then(data => setRows(data.data))
    }, [])
    return (
        <div>
            <Header/>
            <div className={Styles.buttons}>
                <button
                    onClick={(e) => {

                        e.preventDefault();

                        setFilter(rows.filter(item => item.status = 1))

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
            {
                filteredData.length > 0
                    ? filteredData.map(
                        data => <Table
                            key={data.id}
                            name={data.name}
                            price={`${data.totalPrice} تومان`}
                            date={data.createdAt}/>

                    )
                    : rows.map(
                        data => <Table
                            key={data.id}
                            name={data.name}
                            date={data.date}
                            price={data.totalPrice}
                            
                            />

                    )
            }

            {
                openModal && <Modal
                        placeHolder2={"سلام"}
                        placeHolder1={"سلام"}
                        secendBtnTitle={'باتل دوم'}
                        firstBtnTitle={'باتن اول'}
                        titleHead={'ویرایش'}
                        closeModal={setOpenModal}/>
            }

        </div>
    );
}

export default OrdersPage;
