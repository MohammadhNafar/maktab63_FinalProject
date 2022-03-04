import React from 'react';
import Header from '../../layouts/user/header/Header';
import Styles from './checkout.module.css'
import { useEffect,useState } from 'react';
import Table from './Components/Table/Table.component';
import http from '../../services/http.service';
import moment from 'jalali-moment'
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router';
const CheckoutPage = () => {
    const Nav = useNavigate();
    const  [proDuctName, setProductName] = useState([])
    const [name, setName] = useState([])
    const [email , setEmail] = useState([])
    const [phone , setPhone] = useState([])
    const [address , setAddress] = useState([])
    const [date , setDate] = useState([])
    const [totalPrice , setTotalPrice] = useState([])
    const [totalItems , setTotalItems] = useState([])
    
    const datas = {"name" : name, "products" :proDuctName, "email" : email, "phone":phone,"address":address,
    "date":date,"totalPrice":totalPrice, "totalItems":totalItems, status: false}
    const goods = [{proDuctName}];
    useEffect(() => {
        setTotalItems(localStorage.getItem('totalItems'));
     
        setTotalPrice(localStorage.getItem('totalPrice'));
        setProductName(localStorage.getItem('productName'));

    }, [])


    async function sendOrders(e)
    {
        e.preventDefault();
        console.log(name,proDuctName,email,phone,address,date,totalPrice,totalItems);
             localStorage.setItem('datas', JSON.stringify(datas))
         localStorage.setItem('price',totalPrice)
         console.log(datas)
         Nav('/Payment')
         toast.success('سفارش شما با موفقیت ثبت شد')
    }

    function cancelOrder(e)
    {
        e.preventDefault();
        localStorage.clear();
        Nav('/Basket')
    }











    let id = localStorage.getItem('id');
    // let name = localStorage.getItem('productName');
    // let price = localStorage.getItem('totalPrice');
    // let totalItems = localStorage.getItem('totalItems');
    //console.log(proDuctName,totalItems,totalPrice)
    return (
        <div>
            <Header/>
            <hr className={Styles.hrHeader}></hr>
            <div className={Styles.h1Head}>
                <h1 >
                    تکمیل خرید
                </h1>
            </div>
      
            { totalItems ?
              <div>
            <Table
            name = {proDuctName}
            qty = {totalItems}
            price = {totalPrice}

            />
              



                                <form 
                                onSubmit={sendOrders}
                                
                                className={Styles.formstyle7}>
                <ul>
                <li>
                    <label for="name">نام</label>
                    <input
                    onChange={(e) => setName(e.target.value)}
                    required 
                    type="text" name="name" maxlength="100"/>
                    <span>نام کامل خود را وارد کنید</span>
                </li>
                <li>
                    <label for="email">ایمیل</label>
                    <input
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email" name="email" maxlength="100"/>
                    <span>ایمیل خودرا وارد کنید</span>
                </li>
                <li>
                    <label for="address">آدرس</label>
                    <input
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    type="text" name="address" maxlength="100"/>
                    <span>لطفا نشانی کامل خودرا وارد کنید</span>
                </li>
                <li>
                    <label for="phone">موبایل</label>
                    <input
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    type="number" name="phone" maxlength="100"/>

                    <span>لطفا شماره تلفن خودرا وارد کنید</span>
                </li>
                <li>
                    
                    <label for="date">تاریخ تحویل</label>
                    <input
                    required 
                    onChange={(e) => setDate(e.target.value)}
                    type="date" name="date" maxlength="100"/>

                    <span>لطفا تاریخ تحویل خودرا وارد کنید</span>
                </li>
                <li>
                    <button className={Styles.sub} id="submit" >تکمیل و پرداخت </button>
                </li>
                </ul>
                </form>
                <div className={Styles.cancel} >
                <button
                onClick={cancelOrder}
                className={Styles.cancelBtn} >لغو خرید و بازگشت به سبد خرید</button>

                     </div>
                </div>
            : <h1 className={Styles.nothing} >چیزی برای نمایش وجود ندارد </h1> }























                
            </div>
        
    );
}

export default CheckoutPage;
