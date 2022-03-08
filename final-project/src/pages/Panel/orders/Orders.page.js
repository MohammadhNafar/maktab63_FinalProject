import React from 'react';
import Table from './Components/ordersTable/ordersTable.component';
import Styles from './orders.module.css';
import Header from '../../../layouts/manage/header/Header';
import {useEffect, useState} from 'react';
import {getOrders} from '../../../api/orders.api'
import { useDispatch, useSelector } from 'react-redux';
import {fetchOrders} from '../../../redux/Orders/orders.thunk'
import Modal from './Components/ordersModal/OrdersModal.component';
import Pagination from '../../../Components/pagination/pagination.component'
import DataLoading from '../products/Components/DataLoading/PanelProductsLoading.component'
const OrdersPage = () => {
    const proOrders = useSelector(state => state.orders)
    const dispatch = useDispatch();
    const loading = proOrders.loading
    const error = proOrders.error
    const ordersNew = useSelector(state => state.orders.orders.data)
    const [falseData, setFalseData] = useState([])
    const [trueData, setTrueData] = useState([])
    
    const [openModal, setOpenModal] = useState(false);
    const [filteredData, setFilter] = useState([])
    

    /////////////////////////////////////// pagination
    const [currentPage , setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = ordersNew&&ordersNew.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
   //////////////////////////////////////// pagination


    useEffect(() => {
        dispatch(fetchOrders())
        
        
        // getOrders(reqConfig).then(data => setRows(data.data))

    }, [openModal])
    return (
        <div>
            <Header/>
            <div className={Styles.buttons}>
                <button
                    onClick={(e) => {

                        e.preventDefault();
    
                         setTrueData(currentPosts.filter(item => item.status == true))
                        console.log(trueData)
                    }}
                    >
                    سفارش های تحویل شده</button>
                <button
                  onClick={(e) => {

                    e.preventDefault();

                     setTrueData(currentPosts.filter(item => item.status == false))
                    console.log(trueData)
                }}
                
                
                >سفارش های در انتظار ارسال</button>

                <button
                   onClick={(e) => {

                    e.preventDefault();

                     setTrueData(currentPosts)
                    console.log(trueData)
                }}
                
                
                >همه</button>
            
                
             
       

            </div>
            <div className={Styles.title}>
                <h1>سفارش ها
                </h1>
            </div>

            <div className={Styles.tableHead}>
                <h1></h1>
                <h1>زمان ثبت سفارش
                </h1>
                <h1>مبلغ
                </h1>
                <h1>نام کاربر</h1>

            </div>
            <div className={Styles.productList}>
            {loading && <DataLoading/>}
            {error && !loading && <h1 className={Styles.error} >مشکلی پیش آمده. لطفا بعدا تلاش کنید</h1>}
                















            {
                    trueData.length > 0
                        ? trueData.map( data => 
                            <Table
                            key={data.id}
                            name={data.name}
                            date={data.date}
                            price={data.totalPrice}
                        show = {setOpenModal}
                        id = {data.id}
                        email = {data.email}
                        phone = {data.phone}
                           address = {data.address}
                           status = {data.status}
                           totalPrice = {data.totalPrice}
                           products = {data.products}
                           totalItems = {data.totalItems}
                          />

                  )
                        : currentPosts?.map(
                            data => <Table
                                key={data.id}
                                name={data.name}
                                date={data.date}
                                price={data.totalPrice}
                            show = {setOpenModal}
                            id = {data.id}
                            email = {data.email}
                            phone = {data.phone}
                               address = {data.address}
                               status = {data.status}
                               totalPrice = {data.totalPrice}
                               products = {data.products}
                               totalItems = {data.totalItems}
                              />
   
                      )

                        
                }





















                     {/* { currentPosts?.map(
                         data => <Table
                             key={data.id}
                             name={data.name}
                             date={data.date}
                             price={data.totalPrice}
                         show = {setOpenModal}
                         id = {data.id}
                         email = {data.email}
                         phone = {data.phone}
                            address = {data.address}
                            status = {data.status}
                            totalPrice = {data.totalPrice}
                            products = {data.products}
                            totalItems = {data.totalItems}
                           />

                   )
            } */}
            </div>
               <Pagination
             postsPerPage={postsPerPage}
             totalPosts = {ordersNew&&ordersNew.length}
             paginate = {paginate}
             />

            {
                openModal && <Modal
                        
                        closeModal={setOpenModal}/> 
            }

        </div>
    );
}

export default OrdersPage;
