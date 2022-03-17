import React from 'react';
import styles from './SearchPage.module.css';
import Header from '../../layouts/user/header/Header';
import {useEffect, useState, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchProducts } from '../../redux/Shopping/shopping.thunk';
import Card from '../../Components/Cards/Card.component';
import { suppressDeprecationWarnings } from 'moment';
const SearchPage = () => {
    const dispatch = useDispatch();
    const productsNew = useSelector(state => state.shop.products.data)

    let {search} = useParams();
    let category = productsNew?.filter(value=> value.name == search).map( value => value.category)
    console.log(category)
    
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <div>
            <Header/>
            <div className={styles.wrapper}>
            <div className={styles.h1Head}>

                 {productsNew?.filter(value=> value.name == search).length > 0 ?  <h1 >
                 جستجوی محصول {search}
                    </h1> :
                    "محصولی با نام " + search + " پیدا نشد"}
                    </div>
                    <div className={styles.result}>
                    {productsNew?.filter(value=> value.name == search).map(
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
                    )}
                     </div>
                     {productsNew?.filter(value=> value.category == category).length > 0 ?  <h1 className={styles.sameH1} >محصولات مشابله {search}</h1> : ""}
                      
                    <div className={styles.same} >
                      
                        {productsNew?.filter(value=> value.category == category).map(
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
                        )} 
                    </div>
                    {
                        productsNew?.filter(value=> value.category == search).length > 0 ?  
                        
                        <div className={styles.firstSecCards}>
                        { productsNew?.filter(value=> value.category == search).map(
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
                        )}
                        </div>
                        
                        
                        
                        : "س"
                    }

</div>
         
        </div>
    );
}

export default SearchPage;
