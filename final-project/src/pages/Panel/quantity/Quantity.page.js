import React from 'react';
import Header from '../../../layouts/manage/header/Header';
import Table from './Components/Table/Table';
import Styles from './quantity.module.css';
import {useEffect, useState} from 'react';
import {getProducts} from '../../../api/products.api';
import Pagination from '../../../Components/pagination/pagination.component';

const QuantityPage = () => {
const [rows, setRows] = useState([]);
const [filteredData, setFilter] = useState([])
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(5);

function handleClick(e) {
    e.preventDefault();
    getProducts().then(data => setFilter(data.data))
    setFilter(rows.filter(item => item.count > 0))

}

useEffect(() => {
    getProducts().then(data => setRows(data.data))
   
}, [])

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = rows.slice(indexOfFirstPost, indexOfLastPost)
const filterdPaginate = filteredData.slice(indexOfFirstPost, indexOfLastPost);
//change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

return (

    <div>
        <Header/>
        <div className={Styles.buttons}>
            <button
                onClick={(e) => {

                    e.preventDefault();

                    setFilter(rows.filter(item => item.count > 0))

                }}>
                نمایش کالا های موجود
            </button>
            <button
                onClick={(e) => {
                    window
                        .location
                        .reload();
                }}>نمایش همه
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
                    filterdPaginate.length > 0
                        ? filterdPaginate.map(
                            data => <Table
                                key={data.id}
                                nameList={data.name}
                                priceList={`${data.price} تومان`}
                                quanitityList={data.count}/>

                        )
                        : currentPosts.map(
                            data => <Table
                                key={data.id}
                                nameList={data.name}
                                priceList={`${data.price} تومان`}
                                quanitityList={data.count}/>

                        )
                }
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={rows.length}
                    paginate={paginate}/>
            </div>
        </div>
    </div>
);
}

export default QuantityPage;
