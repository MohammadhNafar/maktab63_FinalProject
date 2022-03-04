import React from 'react';
import Home from '../pages/Home/Home.page';
import LoginPage from '../pages/Login/login.page';
import Basket from '../pages/Basket/Basket.page';
import PaymentPage from '../pages/Payment/Payment.page';
import Checkout from '../pages/Checkout/CheckOut.page';
import PaymentResult from '../pages/Payment/paymentResult.page/paymentResult.page';
import Product from '../pages/Product/Product.page';
import ProductsPage from '../pages/Products/Products.page'
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
    <Route path={PATHS.CHECKOUT} element={<Checkout/>} />
    <Route path={PATHS.PAYMENT} element = {<PaymentPage/>}   />
    <Route path={PATHS.BASKET} element={<Basket/>} />
    <Route path='/PaymentResult/:status' element={<PaymentResult/>} />
    <Route  path="/Product/:id" element={<Product/>} />
    <Route  path="/Products/:category" element={<ProductsPage/>}/>
    <Route path="*" element={<NotFound/>} />
    <Route element = {<ProtectdRoutes/>}>
    <Route exact path={PATHS.QUANTITY} element={<Quantity/>} />
     <Route exact path={PATHS.ORDERS} element={<Orders/>} /> 
    <Route exact path={PATHS.PRODUCTS} element={<Products/>} />
    </Route>
    </Routes>
    </BrowserRouter>
    </Rtl>
  );
}

export default AppRoute;
