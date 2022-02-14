import React, { useEffect } from 'react';

import {Link} from 'react-router-dom';
import Styles from './login.page.module.css';
import {useAuth} from '../../routes/ProtectedRoutes/protectedRtoutes';


const LoginPage = () => {

    useEffect(() => {
        localStorage.setItem('loggedin', 'false')
    });

    
    return (
        <div>
            <Link to='/'>            <button className={Styles.HomeBtn}></button></Link>
           
                    <div className={Styles.loginpage}>
                        
            <div className={Styles.form}>
                
                <form className={Styles.form1}>
                <h1>ورود مدیریت</h1>
                <input type="text" placeholder="نام کاربری"/>
                <input type="password" placeholder="رمز عبور"/>
                <Link to='/Quantity' ><button onClick={
                    localStorage.setItem("loggedin" , "true")
                } >ورود</button></Link>
                
                </form>
            </div>
            </div>
        </div>
    );
}

export default LoginPage;
