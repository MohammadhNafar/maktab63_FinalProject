import React from 'react';
import Header from '../../../layouts/manage/header/Header';
import Table from './Components/Table/Table';
import Styles from './quantity.module.css';
import {useEffect, useState} from 'react';
import {getProducts} from '../../../api/products.api'

const QuantityPage = () => {

    const [rows, setRows] = useState([]);
    const [filteredData, setFilter] = useState([])

    function handleClick(e) {
        e.preventDefault();
        getProducts().then(data => setFilter(data.data))
        setFilter(rows.filter(item => item.count > 0))

    }

    useEffect(() => {
        getProducts().then(data => setRows(data.data))
        console.log(rows, 'hello')
    }, [])
    

    return (

        <div>
            <Header/>
            <div className={Styles.buttons}>
                <button onClick={(e) =>{

                  e.preventDefault();
                  
                  setFilter(rows.filter(item => item.count > 0))
                  

                }}>
                    نمایش کالا های موجود
                </button>
                <button onClick={(e) =>{
                  window.location.reload();
                }} >نمایش همه
                </button>
            </div>
            <div className={Styles.wrapper}>
                <div className={Styles.title}>
                    <h1>موجودی ها</h1>
                </div>
                <div className={Styles.tableHead}>
                    <h1>موجودی</h1>
                    <h1>قیمت</h1>
                    <h1>نام کالا
                    </h1>

                </div>
                <div className={Styles.quantityList}>
                    {
                        filteredData.length > 0
                            ? filteredData.map(
                                data => <Table
                                    key={data.id}
                                    nameList={data.name}
                                    priceList={`${data.price} تومان`}
                                    quanitityList={data.count}/>

                            )
                            : rows.map(
                                data => <Table
                                    key={data.id}
                                    nameList={data.name}
                                    priceList={`${data.price} تومان`}
                                    quanitityList={data.count}/>

                            )
                    }
                </div>
            </div>
        </div>
    );
}

export default QuantityPage;
