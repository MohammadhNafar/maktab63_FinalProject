import React from 'react';
import Header from '../../../layouts/manage/header/Header';
import Styles from './products.module.css';
import Table from './Components/Table/table.product.component';
import {useEffect, useState} from 'react';
import {getProducts} from '../../../api/products.api'
import {IMAGE_URL} from '../../../configs/image.url';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from '../../../redux/Shopping/shopping.thunk'
import DataLoading from './Components/DataLoading/PanelProductsLoading.component'
import Modal from './Components/EditModal/Editmodal.component';
import ModalAdd from './Components/AddProductModal/addModal.js';
import Pagination from '../../../Components/pagination/pagination.component';
import BASE_URL from '../../../configs/variable.config';
import axios from 'axios';

const ProductPage = () => {
    const productsNew = useSelector(state => state.shop.products.data)
    const proDatas = useSelector(state => state.shop)
    const loading = proDatas.loading
    const error = proDatas.error
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {

        dispatch(fetchProducts())
        console.log("redux datas", productsNew)
    }, [])
    // const datas = rows; console.log(datas) if (!datas) return 'no data'; if
    // (!Array.isArray(datas)) return 'results are not array'

    function addModal() {
        setOpenAddModal(true);
    }

    async function deleteProduct(id) {
        console.log('getOrders', id)
        try {
            const res = await axios.delete(`${BASE_URL}/products/${id}`);
            return {data: res.data}
        } catch (error) {
            console.log(error);
        }
    }

    //asdadsadsad } get current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = productsNew && productsNew.slice(
        indexOfFirstPost,
        indexOfLastPost
    )
    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (

        <div>
            <Header/>

            <div className={Styles.wrapper}>
                <div className={Styles.title}>
                    <h1>محصولات</h1>
                </div>
                <button className={Styles.addBtn} onClick={addModal}>اضافه کردن کالا</button>
                <div className={Styles.tableHead}>
                    <h1></h1>
                    <h1>دسته بندی
                    </h1>
                    <h1>نام کالا
                    </h1>
                    <h1>تصویر</h1>

                </div>
                <div className={Styles.productList}>
                    {loading && <DataLoading/>}
                    {error && !loading && <h1 className={Styles.error}>مشکلی پیش آمده. لطفا بعدا تلاش کنید</h1>}
                    {openModal && <Modal closeModal={setOpenModal}/>}

                    {openAddModal && <ModalAdd closeModal={setOpenAddModal}/>}
                    {

                        currentPosts
                            ?.map(

                                data => <Table
                                    name={data.name}
                                    image={data.image}
                                    category={data.category}
                                    show={setOpenModal}
                                    id={data.id}
                                    count={data.count}
                                    brand={data.brand}
                                    deleteFunc={deleteProduct}
                                    price={data.price}/>

                            )
                    }
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={productsNew && productsNew.length}
                        paginate={paginate}/>

                </div>

            </div>

        </div>
    );
}

export default ProductPage;
