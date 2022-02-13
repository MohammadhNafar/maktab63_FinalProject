import React from 'react';
import Home from '../pages/Home/Home.page';
import LoginPage from '../pages/Login/login.page';
import Basket from '../pages/Basket/index';
import Checkout from '../pages/Checkout/index';
import Paymentfaild from '../pages/Payment/paymentResultFail/index';
import Paymentsuccess from '../pages/Payment/paymentResultSuccess';
import Product from '../pages/Product/index';
import Orders from '../pages/Panel/orders//Orders.page';
import Products from '../pages/Panel/products/Products.page';
import profile from '../pages/Panel/profile/index';
import Quantity from '../pages/Panel/quantity/Quantity.page';
import {Rtl} from '../Components/Rtl/Rtl.component'
import ProtectdRoutes from './ProtectedRoutes/protectedRtoutes';






import {PATHS} from './routes.config'

import {BrowserRouter, Route, Routes} from 'react-router-dom';





const AppRoute = () => {
  return (
    <Rtl>
    <BrowserRouter>
    <Routes>
    <Route path={PATHS.HOME} element={<Home/>} />
    <Route path={PATHS.LOIGN} element={<LoginPage/>} />
    <Route element = {<ProtectdRoutes/>}>
    <Route path={PATHS.QUANTITY} element={<Quantity/>} />
    <Route path={PATHS.ORDERS} element={<Orders/>} />
    <Route path={PATHS.PRODUCTS} element={<Products/>} />
    </Route>

    </Routes>
    
    
    
    </BrowserRouter>
    </Rtl>
  );
}

export default AppRoute;
