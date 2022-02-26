import React from 'react';
import Header from '../../layouts/user/header/Header';
import Middle from './components/middle/middle.component';
import Styles from './home.page.module.css';
import Card from '../../Components/Cards/Card.component';
import { Icon } from '@iconify/react';
import {getProducts} from '../../api/products.api'
import {IMAGE_URL} from '../../configs/image.url';
import {useEffect, useState} from 'react';
import List from './components/List/List.component';
import Modal from '../../Components/Modal/modal.page';
import {PATHS} from '../../routes/routes.config';
import {connect} from 'react-redux';


const HomePage = ({products}) => {
    const  [rows, setRows] = useState([]);
    //const [openModal, setOpenModal] = useState(false);


    useEffect(() => {
        getProducts().then(data => setRows(data.data) )
        console.log(rows,'hello')
        //localStorage.setItem('loggedin', 'false')

      }, [])
      const datas = rows;
      
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
                            datas.map(
                                data =>
                                <Card
                                id = {data.id}
                                key = {data.id}
                    Name = {data.name}
                    info = {data.category}
                    Price = {data.price}
                    PicList = {data.image}
                    
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
const mapStatToProps = state => {
    return {
    products: state.shop.products
    }

}

export default connect(mapStatToProps)(HomePage);
