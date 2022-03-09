import React from 'react';
import Header from '../../layouts/user/header/Header'
import {useEffect, useState, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/Shopping/shopping.thunk';
import Card from '../../Components/Cards/Card.component'
import Footer from '../../layouts/user/footer/Footer';
import { useParams } from 'react-router';
import DataLoading from '../../pages/Home/components/Loading/Loading.component';
import DataError from '../../pages/Home/components/DataError/DataError.component'
import styles from './AllProducts.module.css';
const AllproductsPage = () => {
    const productsNew = useSelector(state => state.shop.products.data)
    const dispatch = useDispatch();
    let {category} = useParams(); 
    const proDatas = useSelector(state => state.shop)
    const loading = proDatas.loading;
    const error = proDatas.error;
    console.log(category)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
         <div>
            <Header/>
            <div className={styles.wrapper}>
            <div className={styles.h1Head}>







            <h1>همه محصولات</h1>

            
                <div className={styles.dataLoad}>
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        
                        
                      
                    </div>

                    {error && !loading && "خطا در ارتباط با سرور"}
               
            </div>
               { <div className={styles.firstSecCards}>
                { productsNew?.map(
                 values => 
                    <Card
                                id = {values.id}
                                key = {values.id}
                    Name = {values.name}
                    info = {values.category}
                    Price = {values.price}
                    PicList = {values.image}
                    count = {values.count}
                    
                    />
            )
} 
                </div> }
            </div>
         <footer>
             <Footer/>
         </footer>
            
        </div>
    );
}

export default AllproductsPage;
