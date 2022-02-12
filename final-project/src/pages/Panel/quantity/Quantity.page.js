import React from 'react';
import Header from '../../../layouts/manage/header/Header';
import Table from './Components/Table/Table';
import Styles from './quantity.module.css';
import {useEffect, useState} from 'react';
import {getProducts} from '../../../api/products.api'








const QuantityPage = () => {

    const  [rows, setRows] = useState([]);

    useEffect(() => {
        getProducts().then(data => setRows(data.data) )
        console.log(rows,'hello')
      }, [])
      const datas = rows;
      console.log(datas)
      if (!datas) return 'no data';
      if (!Array.isArray(datas)) return 'results are not array'
      
    return (
      
        <div>
            <Header/>
            <div className= {Styles.title}>
            <h1>موجودی ها</h1>
            </div>
            <div className= {Styles.tableHead}>
              <h1>موجودی</h1>
              <h1>قیمت</h1>
              <h1>نام کالا </h1>

            </div>
             {
            datas.map(
                data =>
                
              
             
              
              <Table 
             
  
             
              nameList = {data.name}
              priceList = {`${data.price} تومان`}
              quanitityList = {data.count}
              />
              
            )}
            
        </div>
    );
}

export default QuantityPage;
