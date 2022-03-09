import React from 'react';
import Header from '../../../layouts/manage/header/Header';
import styles from './products.module.css';
import Table from './Components/Table/table.product.component';
import {useEffect, useState} from 'react';
import {fetchProducts} from '../../../redux/Shopping/shopping.thunk'
import DataLoading from './Components/DataLoading/PanelProductsLoading.component'
import Modal from './Components/EditModal/Editmodal.component';
import ModalAdd from './Components/AddProductModal/addModal.js';
import Pagination from '../../../Components/pagination/pagination.component';
import BASE_URL from '../../../configs/variable.config';
import { useSelector ,useDispatch} from 'react-redux'

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
    let renderStatus = useSelector(state => state.renderStatus.renderStatus)
    useEffect(() => {
        
        dispatch(fetchProducts())
        
    }, [openAddModal])


    function addModal() {
        setOpenAddModal(true);
    }

    async function deleteProduct(id) {
        window.location.reload();
        dispatch({type: 'RE_RENDER_STATUS', payload: !renderStatus})
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

            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <h1>محصولات</h1>
                </div>
                <button className={styles.addBtn} onClick={addModal}>اضافه کردن کالا</button>
                <div className={styles.tableHead}>
                    <h1></h1>
                    <h1>دسته بندی
                    </h1>
                    <h1>نام کالا
                    </h1>
                    <h1>تصویر</h1>

                </div>
                <div className={styles.productList}>
                    {loading && <DataLoading/>}
                    {error && !loading && <h1 className={styles.error}>مشکلی پیش آمده. لطفا بعدا تلاش کنید</h1>}
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
                                    description = {data.description}
                                    key={data.id}
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
