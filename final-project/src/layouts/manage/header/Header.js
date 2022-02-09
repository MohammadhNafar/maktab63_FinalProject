import React from 'react';
import Styles from './Header.module.css';
import Logo from '../../../assets/images/logo.svg';
import {Link} from 'react-router-dom';


export default function Header() {
    
    return (
        
        <div className= {Styles.container}>
            <div className= {Styles.btns}>
          <Link to='/Orders' ><h1 className={Styles.manageHeaderH1} >سفارش ها</h1></Link>  
          <Link to='/Products'> <h1 className={Styles.manageHeaderH1}>محصولات</h1></Link>          
           <Link to='/Quantity'> <h1 className={Styles.manageHeaderH1} >موجودی ها</h1></Link>
            </div>
            
           <Link to='/' ><h1 className={Styles.manageHeaderH1} >بازگشت به سایت</h1></Link> 
            <h2 className={Styles.manageHeaderH2}>
                <img src={Logo} ></img>
                پنل مدیریت</h2>
        </div>
    );
}


