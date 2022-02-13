import React from 'react';
import Header from '../../../layouts/manage/header/Header';
import Table from './Components/Table/Table';
import Styles from './quantity.module.css';
import {useEffect, useState} from 'react';
import {getProducts} from '../../../api/products.api'







const QuantityPage = () => {

    const  [rows, setRows] = useState([]);
    
//     function handleClick()
// {
//   getProducts().then(data => setRows(data.data) )
//   rows.filter(item => item.count > 0 )
//   console.log(rows)
// }


    useEffect(() => {
        getProducts().then(data => setRows(data.data) )
        console.log(rows,'hello')
      }, [])
      const datas = rows;
      let brands;
      console.log(datas)
     datas.map(data => (
       console.log(data.brand)
       
     )
     )
    
     
      
    return (
      
        <div>
            <Header/>
            <div className={Styles.buttons}>
            <button>نمایش کالا های موجود </button>
            <button  >نمایش همه </button>
            </div>
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
             
              key = {data.id}
             
              nameList = {data.name}
              priceList = {`${data.price} تومان`}
              quanitityList = {data.count}
              />
              
            )}
            
        </div>
    );
}

export default QuantityPage;
