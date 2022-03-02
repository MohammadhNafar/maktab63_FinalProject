import React from 'react';
import Header from '../../layouts/user/header/Header';
import Styles from './checkout.module.css'
import { useEffect,useState } from 'react';
import Table from './Components/Table/Table.component';
import http from '../../services/http.service';
const CheckoutPage = () => {

    const  [proDuctName, setProductName] = useState([])
    const [name, setName] = useState([])
    const [email , setEmail] = useState([])
    const [phone , setPhone] = useState([])
    const [address , setAddress] = useState([])
    const [date , setDate] = useState([])
    const [totalPrice , setTotalPrice] = useState([])
    const [totalItems , setTotalItems] = useState([])
    const status = 0;
    const datas = {"name" : name, "products" :proDuctName, "email" : email, "phone":phone,"address":address,
    "date":date,"totalPrice":totalPrice, "totalItems":totalItems, "status":status}
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
        
        let result = http.post('http://localhost:3002/orders' , {
            name,
           

            email,
            phone,
            address,
            date,
            totalPrice,
            totalItems,
            goods,
            status
        })
        console.log(result)


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
            <Table
            name = {proDuctName}
            qty = {totalItems}
            price = {totalPrice}

            />
                {/* قیمت    <h1>{price}</h1> 
                تعداد    <h1>{totalItems}</h1> 
                کالا ها   <h1>{name}</h1> */}



                                <form className={Styles.formstyle7}>
                <ul>
                <li>
                    <label for="name">نام</label>
                    <input
                    onChange={(e) => setName(e.target.value)}
                    
                    type="text" name="name" maxlength="100"/>
                    <span>نام کامل خود را وارد کنید</span>
                </li>
                <li>
                    <label for="email">ایمیل</label>
                    <input
                    onChange={(e) => setEmail(e.target.value)}
                    
                    type="email" name="email" maxlength="100"/>
                    <span>ایمیل خودرا وارد کنید</span>
                </li>
                <li>
                    <label for="address">آدرس</label>
                    <input
                    
                    onChange={(e) => setAddress(e.target.value)}
                    type="text" name="address" maxlength="100"/>
                    <span>لطفا نشانی کامل خودرا وارد کنید</span>
                </li>
                <li>
                    <label for="phone">موبایل</label>
                    <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="number" name="phone" maxlength="100"/>

                    <span>لطفا شماره تلفن خودرا وارد کنید</span>
                </li>
                <li>
                    <label for="date">تاریخ تحویل</label>
                    <input
                    onChange={(e) => setDate(e.target.value)}
                    type="date" name="date" maxlength="100"/>

                    <span>لطفا تاریخ تحویل خودرا وارد کنید</span>
                </li>
                <li>
                    <button onClick={sendOrders} >تکمیل و پرداخت </button>
                </li>
                </ul>
                </form>






















                
            </div>
        </div>
    );
}

export default CheckoutPage;
