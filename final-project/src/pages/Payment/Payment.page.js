import React from 'react';
import Styles from './payment.module.css'
import http from '../../services/http.service';

const PaymentPage = () => {



    let datas = localStorage.getItem('datas');
    let price = localStorage.getItem('price');
    console.log(JSON.parse(datas))

    async function sendData(e)
    {
        e.preventDefault();
        console.log(datas)
        let result = http.post('http://localhost:3002/orders' , JSON.parse(datas))
        console.log(result)
        localStorage.clear();
    }

    return (
        <div className={Styles.container}>
            <h1>
                صفحه ی پرداخت
            </h1>
            <h1>مبلغ قابل پرداخت {price}</h1>
            <div className={Styles.inputs}>
            <input placeholder='شماره کارت' type="number"></input>
            <input placeholder='تاریخ انقضا' type="number" ></input>
            <input placeholder='cvv2' type="number" ></input>
            <button onClick={sendData} >تکمیل خرید</button>
            <button>لغو خرید</button>

            </div>
           

        </div>
    );
}

export default PaymentPage;
