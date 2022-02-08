import React from 'react';
import Home from '../pages/Home/Home.page';
import LoginPage from '../pages/Login/login.page';
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





const AppRoute = () => {
  return (

    <BrowserRouter>
    <Routes>
    <Route path={PATHS.HOME} element={<Home/>} />
    <Route path={PATHS.LOIGN} element={<LoginPage/>} />
    <Route path={PATHS.QUANTITY} element={<Quantity/>} />
    </Routes>
    
    
    
    </BrowserRouter>

  );
}

export default AppRoute;


// function App() {

  
    // <BrowserRouter>
    // <Routes>
    // <Route path={PATHS.HOME} element={<Home/>} />
    // <Route path={PATHS.LOIGN} element={<LoginPage/>} />
    // <Route path={PATHS.QUANTITY} element={<Quantity/>} />
    // </Routes>
    
    
    
    // </BrowserRouter>



// }

// export default App;
