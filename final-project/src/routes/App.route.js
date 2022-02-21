import React from 'react';
import Home from '../pages/Home/Home.page';
import LoginPage from '../pages/Login/login.page';
import Basket from '../pages/Basket/index';
import Checkout from '../pages/Checkout/index';
import Paymentfaild from '../pages/Payment/paymentResultFail/index';
import Paymentsuccess from '../pages/Payment/paymentResultSuccess';
import Product from '../pages/Product/Product.page';
import Orders from '../pages/Panel/orders//Orders.page';
import Products from '../pages/Panel/products/Products.page';
import profile from '../pages/Panel/profile/index';
import Quantity from '../pages/Panel/quantity/Quantity.page';
import {Rtl} from '../Components/Rtl/Rtl.component'
import ProtectdRoutes from './ProtectedRoutes/protectedRtoutes';
import NotFound from '../pages/notFound/notFound.page';






import {PATHS} from './routes.config'

import {BrowserRouter, Route, Routes} from 'react-router-dom';





const AppRoute = () => {
  return (
    <Rtl>
    <BrowserRouter>
    <Routes>
    <Route exact path={PATHS.HOME} element={<Home/>} />
    <Route path={PATHS.LOIGN} element={<LoginPage/>} />
    <Route  path={PATHS.PRODUCT} element={<Product/>} />
    <Route path="*" element={<NotFound/>} />
    <Route element = {<ProtectdRoutes/>}>
    <Route exact path={PATHS.QUANTITY} element={<Quantity/>} />
    {/* <Route exact path={PATHS.ORDERS} element={<Orders/>} /> */}
    <Route exact path={PATHS.PRODUCTS} element={<Products/>} />
    </Route>
    </Routes>
    </BrowserRouter>
    </Rtl>
  );
}

export default AppRoute;
