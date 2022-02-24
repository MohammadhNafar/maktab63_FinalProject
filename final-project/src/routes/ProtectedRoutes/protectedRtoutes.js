import React from 'react';
import {Navigate , Outlet} from 'react-router-dom';
import {PATHS} from '../routes.config';

const useAuth = () => 
{
    const user = {loggedIn: true}
    return user  && user.loggedIn;
   
}

const Protectedrtoutes = () => {
  
    const isAuth = useAuth();
    if (localStorage.hasOwnProperty("IS_LOGGEDIN") )
    return   isAuth ? <Outlet/> : <Navigate to= {PATHS.LOIGN}/>;
};
export default Protectedrtoutes;
