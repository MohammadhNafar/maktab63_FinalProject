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
            {price ? 
               
              <><div className={Styles.back}>
                    <img className={Styles.image} src={require('../../assets/images/payment.png')} alt="" />

                </div><h1 className={Styles.priceSec}>{price}</h1><div className={Styles.inputs}>
                        <input placeholder='شماره کارت' type="number"></input>
                        <input placeholder='تاریخ انقضا' type="number"></input>
                        <input placeholder='cvv2' type="number"></input>

                        <div className={Styles.btns}>
                            <button className={Styles.cancel}>لغو خرید</button>

                            <button className={Styles.submit} onClick={sendData}>تکمیل خرید</button>
                        </div>


                    </div></>
              
            : <h1 className={Styles.none} >!چیزی برای نمایش وجود ندارد </h1> }
            
          
           
            </div>
    
    );
}

export default PaymentPage;
