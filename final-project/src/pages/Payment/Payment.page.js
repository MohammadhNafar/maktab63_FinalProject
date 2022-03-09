import React from 'react';
import styles from './payment.module.css'
import http from '../../services/http.service';
import BASE_URL from '../../configs/variable.config';
import { useSelector ,useDispatch} from 'react-redux'
import {clearCart} from '../../redux/Shopping/shopping-actions'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
const PaymentPage = () => {
    const dispatch = useDispatch();
    const productsNew = useSelector(state => state.shop.cart);
    console.log(productsNew)
    const Nav = useNavigate()
    
    window.onbeforeunload = function (e) {
        e = e || window.event;
    
        
        if (e) {
            e.returnValue = 'Sure?';
        }
    }
    window.onbeforeunload = function() {
        return "";
  }

    let datas = localStorage.getItem('datas');
    let price = localStorage.getItem('price');
    console.log(JSON.parse(datas))

    async function sendData(e)
    {
        e.preventDefault();
        
        let result = http.post(`${BASE_URL}/orders` , JSON.parse(datas))
        
        localStorage.clear();
        Nav('/PaymentResult/Success')
        dispatch(clearCart())
    }

    function cancelData()
    {
        
        localStorage.clear();
        Nav('/PaymentResult/Failed')
    }

    return (
        
        <div className={styles.container}>
            {price ? 
               
              <><div className={styles.back}>
                    <img className={styles.image} src={require('../../assets/images/payment.png')} alt="" />

                </div><h1 className={styles.priceSec}>{price}</h1>
                    <form onSubmit={sendData} >
                    <div className={styles.inputs}>
                        <input required  placeholder='شماره کارت' type="number"></input>
                        <input required  placeholder='تاریخ انقضا' type="number"></input>
                        <input required  placeholder='cvv2' type="number"></input>
                        </div>
                        <div className={styles.btns}>
                            
                            <button className={styles.submit} id="submit">تکمیل خرید</button>
                        </div>
                        </form>
                        <button
                            onClick={cancelData}
                            className={styles.cancel}>لغو خرید</button>
                      

                    </>
              
            : <h1 className={styles.none} >!چیزی برای نمایش وجود ندارد </h1> }
            
          
           
            </div>
    
    );
}

export default PaymentPage;
