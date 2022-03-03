import React from 'react';
import Header from '../../../layouts/user/header/Header';
import Styles from './paymentResult.module.css'
import Success from './Components/paymentResultSuccess/paymentSuccess.page.js';
import Failed from './Components/paymentResultFail/paymentFail.page';
import {useParams} from 'react-router-dom';

const PaymentresultPage = () => {
    const {status} = useParams();
    return (
        
        <div>
              <Header/>
              
            <hr className={Styles.hrHeader}></hr>
            {status === 'Success' ? <Success/> : <Failed/>}
            
        </div>
        
    );
}

export default PaymentresultPage;
