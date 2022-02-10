import React from 'react';
import Header from '../../../layouts/manage/header/Header';
import Table from '../../../Components/Tables/Table.component';
import Styles from './quantity.module.css';

const Index = () => {
    return (
        <div>
            <Header/>
            <div className= {Styles.title}>
            <h1>موجودی ها</h1>
            </div>
            
            
            <Table id = {'سلام'}
            name = {'سلام'}
            price = {'سلام'}
            time = {'سلام'}
            status = {'سلام'}
            info = {'سلام'}

            idList = {'1'}
            nameList = {'ممدحسین نفر'}
            priceList = {'1200000'}
            timeList = {'12/12/1400'}
            statusList = {'faild'}
            infoList = {'progress'}
            />
           
        </div>
    );
}

export default Index;
