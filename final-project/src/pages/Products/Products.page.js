import React from 'react';
import Styles from './products.module.css'
import Header from '../../layouts/user/header/Header'
import {useEffect, useState, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/Shopping/shopping.thunk';
import Card from '../../Components/Cards/Card.component'
import Footer from '../../layouts/user/footer/Footer';
import { useParams } from 'react-router';

const ProductsPage = () => {
    const productsNew = useSelector(state => state.shop.products.data)
    const dispatch = useDispatch();
    let {category} = useParams(); 

    console.log(category)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
      






    return (
        <div  >
            <Header/>
            <div className={Styles.wrapper}>
            <div className={Styles.h1Head}>
                
                <h1 >
                محصولات گروه   {category} 
                </h1>
            </div>
               { <div className={Styles.firstSecCards}>
                { productsNew?.filter(value=> value.category == category).map(
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

export default ProductsPage;
