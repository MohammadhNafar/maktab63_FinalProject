import React from 'react';
import Header from '../../../layouts/manage/header/Header';
import Styles from './products.module.css';
import Table from '../../../Components/Tables/Table.component';

const ProductPage = () => {
    return (
        <div>
               <Header/>
            <div className= {Styles.title}>
            <h1>محصولات</h1>
            </div>
            <Table title1 = {'سلا213'}
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

export default ProductPage;
