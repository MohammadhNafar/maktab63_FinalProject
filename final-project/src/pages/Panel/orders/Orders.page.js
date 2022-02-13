import React from 'react';
import Table from '../../../Components/Tables/Table.component';
import Styles from './orders.module.css';
import Header from '../../../layouts/manage/header/Header';
import {useEffect, useState} from 'react';
import {getOrders} from '../../../api/user.api'

const OrdersPage = () => {

    const  [rows, setRows] = useState([]);

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
            
            
            <Table title1 = {'سلام'}
            title2 = {'سلام'}
            title3 = {'سلام'}
            title4 = {'سلام'}
            list1 = {"سلام"}
            list2 = {"سلام"}
            list3 = {"سلام"}
            list4 = {"سلام"}
            
            
            
            
            />
            
        </div>
    );
}

export default OrdersPage;