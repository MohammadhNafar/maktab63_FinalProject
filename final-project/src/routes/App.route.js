import React from 'react';
import Home from '../pages/Home/index';
import LoginPage from '../pages/Login/index';
import Basket from '../pages/Basket/index';
import Checkout from '../pages/Checkout/index';
import Paymentfaild from '../pages/Payment/paymentResultFail/index';
import Paymentsuccess from '../pages/Payment/paymentResultSuccess';
import Products from '../pages/Products/index';
import Orders from '../pages/Panel/orders/index';
import Product from '../pages/Panel/product/index';
import profile from '../pages/Panel/product/index';
import Quantity from '../pages/Panel/quantity/index';






import {PATHS} from './routes.config'


import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  
    <BrowserRouter>
    <Routes>
    <Route path={PATHS.HOME} element={<Home />} />


      
    </Routes>
    
    
    
    </BrowserRouter>


  // return (
  //   <div>
  //     <h1>my shop</h1>
  //   </div>
  // );
}

export default App;
