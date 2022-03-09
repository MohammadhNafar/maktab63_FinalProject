import React from 'react';
import Header from '../../layouts/user/header/Header';
import Styles from './basket.module.css';
import Table from './Components/Table/Basket.table.component';
import {connect} from 'react-redux';
import {useState, useEffect} from 'react';
import {toast} from 'react-toastify'
import { useDispatch} from 'react-redux';

import { removeFromCart,adjustItemQty  } from '../../redux/Shopping/shopping-actions';
import "react-toastify/dist/ReactToastify.css";
import Empty from './Components/empty/Empty.basket.component'
import { Link } from 'react-router-dom';
import Footer from '../../layouts/user/footer/Footer';
const BasketPage = ({cart}) => {
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const send = 12000;

    useEffect(() => {

        let items = 0;
        let price = 0;
        cart.forEach(item => {
            if (item.qty > item.count)
            {
                items = item.qty - item.qty
                price = item.price - item.price
                dispatch(adjustItemQty(item.id,item.count));

                toast.error(`${item.name}  بیشتر از تعداد موجود است. نهایت سفارش ${item.count} عدد `)
                
            }
            else
            {
                if (item.qty > item.count)
                {
                    setTotalItems(item.qty - item.qty)
                    setTotalPrice(item.price - item.price)
                    item.name = null
                }
              
                else
                {
                items += item.qty
                price += item.price * item.qty
                }
                
                
            }
            //item.qty > item.count ? items = item.qty - item.qty : items += item.qty;
            
            //price += item.qty * item.price
        });
        setTotalPrice(price);
        setTotalItems(items);
    }, [cart, totalItems, totalPrice, setTotalPrice, setTotalItems]);

    function submit()
    {
        
        localStorage.setItem('totalItems',totalItems );
        localStorage.setItem('totalPrice',totalPrice );
        localStorage.setItem('productName', [cart.map(item => (
            item.name
        ))]) 
        localStorage.setItem('qty', cart.map(item => (
            item.qty
        ))) 
        localStorage.setItem('productId', cart.map(item => (
            item.id
        ))) 


    }
    return (
        <div className={Styles.container}>
            <Header/>
            
            <div className={Styles.h1Head}>
                <h1 >
                    سبد خرید
                </h1>
            </div>
            {
                                    localStorage.getItem('totalItems') ?
                                    <Link to='/Checkout' > 
                                    <button className={Styles.continue} >ادامه خرید خبلی</button> 
                                    </Link>
                                    
                                    
                                    : ""
                                }
            <div className={Styles.wrapper}>
                {
                    totalItems > 0
                        ? <div className={Styles.tableHead}>
                                <h1></h1>
                                <h1>تعداد</h1>
                                <h1>قیمت</h1>
                                <h1>نام کالا
                                </h1>
                                <h1>عکس
                                </h1>

                            </div>
                        : ""
                }

                {
                    cart.length > 0
                        ? ""
                        : <Empty/>
                }
                <div className={Styles.itemsTable}>
                {cart?.length > 0 
                    ? 
                    cart.map(item => (
                        <Table
                            count = {item.count}
                            key={item.id}
                            product={item.name}
                            price={item.price}
                            qty={item.qty}
                            PicList = {item.image}
                            id={item.id}/>
                           
                            
                    ))
                : "لطفا تعداد محصولات را کنترل کنید"}

                







                </div>
                {/* {
                    cart.map(item => (
                        <Table
                            count = {item.count}
                            key={item.id}
                            product={item.name}
                            price={item.price}
                            qty={item.qty}
                            id={item.id}/>
                            
                    ))
                } */}

                {
                    totalItems
                        ? <div className={Styles.totalItems}>

                                تعداد کالا ها : {totalItems}
                            </div>
                        : ""
                }
                {
                    totalItems
                        ? <div className={Styles.priceSec}>
                                <div className={Styles.priceSecP}>
                                    {
                                        totalPrice
                                            ? <div className={Styles.totalPrice}>
                                                    قیمت نهایی {totalPrice}
                                                    تومان

                                                </div>
                                            : ""
                                    }
                                    {
                                        totalItems
                                            ? totalPrice < 200000
                                                ? <div className={Styles.sendPrice}>
                                                       
                                                            قیمت با هزینه ارسال  :         
                                                          { totalPrice + send}  تومان
                                                    </div>
                                                : <div className={Styles.freeSend}>
                                                        هزینه ارسال خرید های بیشتر 200 هزار تومان رایگان است !
                                                    </div>
                                            : ""
                                    }
                                </div>
                               

                                {
                                    totalItems
                                        ? <Link to='/Checkout'  >
                                        <button onClick={submit} className={Styles.confirmBtn}>
                                                نهایی کردن خرید
                                            </button></Link> 
                                        : ""
                                }
                             
                                
                            </div>

                        : ""
                }

            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {cart: state.shop.cart}
}
export default connect(mapStateToProps)(BasketPage);
