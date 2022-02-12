import React from 'react';
import Header from '../../../layouts/manage/header/Header';
import Styles from './products.module.css';
import Table from './Components/Table/table.product.component';
import {useEffect, useState} from 'react';
import {getProducts} from '../../../api/products.api'
import {IMAGE_URL} from '../../../configs/image.url';


const ProductPage = () => {
    
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
            <h1>محصولات</h1>
            </div>
            <div className= {Styles.tableHead}>
            <h1></h1>
              <h1>دسته بندی </h1>
              <h1>نام کالا </h1>
              <h1>تصویر</h1>

            </div>
             {
            datas.map(
                data =>
                
              
             
              
              <Table 
             
  
             
              nameList = {data.name}
             
              
               PicList = {data.image}
                categoryList = {data.category}
              />
              
            )}
            
        </div>
    );
}

export default ProductPage;
