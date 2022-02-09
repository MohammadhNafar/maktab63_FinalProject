import React from 'react';
import Table from '../../../Components/Tables/Table.component';
import Styles from './orders.module.css';
import Header from '../../../layouts/manage/header/Header';

const OrdersPage = () => {
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
