import React from 'react';
import Header from '../../../layouts/manage/header/Header';
import Styles from './products.module.css';
import Table from './Components/Table/table.product.component';
import {useEffect, useState} from 'react';
import {getProducts} from '../../../api/products.api'
import {IMAGE_URL} from '../../../configs/image.url';
import Modal from '../../../Components/Modal/modal.page';
import ModalAdd from './Components/AddProductModal/addModal.js';
import Pagination from '../../../Components/pagination/pagination.component';
import BASE_URL from '../../../configs/variable.config';
import axios from 'axios';

const ProductPage = () => {
    
    const  [rows, setRows] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [currentPage , setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);



    useEffect(() => {
        getProducts().then(data => setRows(data.data) )
        console.log(rows,'hello')
      }, [])
      const datas = rows;
      console.log(datas)
      if (!datas) return 'no data';
      if (!Array.isArray(datas)) return 'results are not array'
      
    function addModal()
    {
      setOpenAddModal(true);
      console.log('helslo')
    }
    // function deleteRows(id)
    // {
    //   console.log('clicked')
    //   fetch('http://localhost:3002/products/'+id, {
    //     method: 'DELETE',
    //     headers: {'Aceept': 'application/json'},
    //     'content-type': 'application/json'
    // })


     async function deleteProduct(id) {
      console.log('getOrders',id)
      try {
          const res = await axios.delete(`${BASE_URL}/products/${id}`);
              return {
                  data: res.data,
              }
      } catch (error) {
          console.log(error);
      }
  }


//asdadsadsad








    // }
          //get current page
          const indexOfLastPost = currentPage * postsPerPage;
          const indexOfFirstPost = indexOfLastPost - postsPerPage;
          const currentPosts = datas.slice(indexOfFirstPost, indexOfLastPost)
            //change page
            const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
      
    return (
      
        <div>
            <Header/>
            <div className={Styles.wrapper}>
            <div className= {Styles.title}>
            <h1>محصولات</h1>
            </div>
            <button className={Styles.addBtn} onClick = {addModal} >اضافه کردن کالا</button>
            <div className= {Styles.tableHead}>
            <h1></h1>
              <h1>دسته بندی </h1>
              <h1>نام کالا </h1>
              <h1>تصویر</h1>

            </div>
            <div className={Styles.productList}>
            {openModal && <Modal placeHolder2 = {"سلام"}
            placeHolder1 = {"سلام"}
             secendBtnTitle = {'باتل دوم'}
              firstBtnTitle = {'باتن اول'} 
              titleHead = {'ویرایش'} 
              closeModal = {setOpenModal}/>} 

              {
                openAddModal && <ModalAdd
                closeModal = {setOpenAddModal}
                
                
                />
              }
             {
            currentPosts.map(
              
                data =>
                
              <Table 
              nameList = {data.name}
               PicList = {data.image}
                categoryList = {data.category}
                show = {setOpenModal}
                id = {data.id}
                deleteFunc = {deleteProduct}
              />
              
            )}
             <Pagination
             postsPerPage={postsPerPage}
             totalPosts = {datas.length}
             paginate = {paginate}
             
             />
           
            </div>
           
            </div>
           
        </div>
    );
}

export default ProductPage;
