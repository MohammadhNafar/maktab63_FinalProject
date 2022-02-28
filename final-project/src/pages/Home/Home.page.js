import React from 'react';
import Header from '../../layouts/user/header/Header';
import Middle from './components/middle/middle.component';
import Styles from './home.page.module.css';
import Card from '../../Components/Cards/Card.component';
import { Icon } from '@iconify/react';
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/Shopping/shopping.thunk';


const HomePage = () => {
    const dispatch = useDispatch();
    const productsNew = useSelector(state => state.shop.products.data)
   
    


    useEffect(() => {
        dispatch(fetchProducts())
       
    }, [])
      
      
    return (
        <div className={Styles.container}>
                <Header
                cart = {'1'}
                
                
                />
            <div className= {Styles.Mid} >
            <Middle/>
            <div className={Styles.listHome}>
            {/* { datas.map(data =>
             <List
             key = {data.id}
             btnTitle = {data.category}
             />           
            )
} */}
</div>
            </div>
            <div className= {Styles.bodySec}>
                <div className={Styles.products}>
                <h1 className= {Styles.firstH1} >محصولات</h1>
                <div className={Styles.firstSec}>
                    
                {/* {openModal && <Modal placeHolder2 = {"سلام"}

            placeHolder1 = {"سلام"}
             secendBtnTitle = {'باتل دوم'}
              firstBtnTitle = {'باتن اول'} 
              titleHead = {'ویرایش'} 
              closeModal = {setOpenModal}/>}  */}
                    <div className={Styles.firstSecCards}>
                        {
                             productsNew?.map(
                                data =>
                                <Card
                                id = {data.id}
                                key = {data.id}
                    Name = {data.name}
                    info = {data.category}
                    Price = {data.price}
                    PicList = {data.image}
                    count = {data.count}
                    
                    />
                            )
                        }      
                    <h2><Icon  icon="ep:more-filled" width="50" height="50" /></h2>
                    </div>
                </div>
                <div className={Styles.chokoSec}>
                    {/* {
                        datas.filter(value=> value.category == 'شکلات').map(
                            values => 
                            <ul>
                                <li>{values.category}</li>
                            <li>{values.name}</li>

                            </ul>
                            
                        )
                    } */}

                </div>
                </div>
            </div>
        </div>
        
    );
}


export default HomePage;
