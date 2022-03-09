import React from 'react';
import Styles from './payment.module.css'
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
        
        <div className={Styles.container}>
            {price ? 
               
              <><div className={Styles.back}>
                    <img className={Styles.image} src={require('../../assets/images/payment.png')} alt="" />

                </div><h1 className={Styles.priceSec}>{price}</h1>
                    <form onSubmit={sendData} >
                    <div className={Styles.inputs}>
                        <input required  placeholder='شماره کارت' type="number"></input>
                        <input required  placeholder='تاریخ انقضا' type="number"></input>
                        <input required  placeholder='cvv2' type="number"></input>
                        </div>
                        <div className={Styles.btns}>
                            
                            <button className={Styles.submit} id="submit">تکمیل خرید</button>
                        </div>
                        </form>
                        <button
                            onClick={cancelData}
                            className={Styles.cancel}>لغو خرید</button>
                      

                    </>
              
            : <h1 className={Styles.none} >!چیزی برای نمایش وجود ندارد </h1> }
            
          
           
            </div>
    
    );
}

export default PaymentPage;
