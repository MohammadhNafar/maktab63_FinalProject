import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './login.page.module.css';

const LoginPage = () => {
    return (
        <div>
            <Link to='/'>            <button className={Styles.HomeBtn}></button></Link>
           
                    <div className={Styles.loginpage}>
                        
            <div className={Styles.form}>
                
                <form className={Styles.form1}>
                <h1>Login</h1>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>login</button>
                </form>
            </div>
            </div>
        </div>
    );
}

export default LoginPage;
