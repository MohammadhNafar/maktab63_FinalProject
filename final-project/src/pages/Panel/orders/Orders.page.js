import React from 'react';
import Table from '../../../Components/Tables/Table.component';
import Styles from './orders.module.css';
import Header from '../../../layouts/manage/header/Header';
import {useEffect, useState} from 'react';
import {getOrders} from '../../../api/user.api'
import Modal from '../../../Components/Modal/modal.page';

const OrdersPage = () => {

    const  [rows, setRows] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        getOrders().then(data => setRows(data) )
        console.log(rows,'hello from orders')
      }, [])
    return (
        <div>
             <Header/>
            <div className= {Styles.title}>
            <h1>موجودی ها</h1>
            </div>
            <button

            onClick={()=>{
                setOpenModal(true);
            }}
            
            >مودال</button>
           {openModal && <Modal placeHolder2 = {"سلام"}
            placeHolder1 = {"سلام"}
             secendBtnTitle = {'باتل دوم'}
              firstBtnTitle = {'باتن اول'} 
              titleHead = {'ویرایش'} 
              closeModal = {setOpenModal}/>} 
            
           
            
        </div>
    );
}

export default OrdersPage;
