import React from 'react';
import Header from '../../layouts/user/header/Header';
import Middle from './components/middle/middle.component';
import Styles from './home.page.module.css';
import Card from '../../Components/Cards/Card.component';
import { Icon } from '@iconify/react';
import {useEffect, useState, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/Shopping/shopping.thunk';
import lottie from 'lottie-web';
import List from './components/List/List.component'
import Sidebar from '../../layouts/user/sideBar/SideBar';


const HomePage = () => {
    const dispatch = useDispatch();
    const productsNew = useSelector(state => state.shop.products.data)
    const proDatas = useSelector(state => state.shop)
    const loading = proDatas.loading
    const error = proDatas.error
    const container = useRef(null)
     //let categorys = productsNew.map(item =>  item.category)
     //console.log(categorys)
     
    //  let productsSet = [...new Set(productsNew)]
    //  console.log( productsSet)

    
    



    useEffect(() => {
        dispatch(fetchProducts())
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/lottie/cart/16982-shopping-loader.json')
        })
    }, [])
      
      
    return (
        
        <div className={Styles.container}>
            
                <Header
                />
                
                   {/* { productsNew.map(data =>
             <List
             key = {data.id}
             btnTitle = {data.category}
             />           
            ) */}

                            
            
            <div className= {Styles.Mid} >
            <Middle/>
            {loading && <h1 className={Styles.loadingg} >درحال بارگذاری</h1>}
            {error && !loading && <div className={Styles.animations} ref={container}>مشکلی پیش آمده. لطفا بعدا تلاش کنید</div>}
           
            <div className={Styles.listHome}>
        
</div>
            </div>
            <div className= {Styles.bodySec}>
                <div className={Styles.sideBarContent}>
                { productsNew?.filter(value=> value.category == 'شکلات').map(
                 values => 
                 <Sidebar
                 key = {values.id}
                 titles = {values.category}
                 />        
            )
} 
                </div>
          
            
                <div className={Styles.products}>
                
                
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
