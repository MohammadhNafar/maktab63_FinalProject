import React from 'react';
import Styles from './Header.module.css';
import Logo from '../../../assets/images/logo.svg';
import {Link} from 'react-router-dom';


export default function Header() {
    
    return (
        
        <div className= {Styles.container}>
            <div className= {Styles.btns}>
          <Link className={Styles.linkTxt} to='/Orders' ><h1 className={Styles.manageHeaderH1} >سفارش ها</h1></Link>  
          <Link className={Styles.linkTxt} to='/Products'> <h1 className={Styles.manageHeaderH1}>محصولات</h1></Link>          
           <Link className={Styles.linkTxt} to='/Quantity'> <h1 className={Styles.manageHeaderH1} >موجودی ها</h1></Link>
            </div>
            
           <Link className={Styles.linkTxt} to='/' ><h1 className={Styles.manageHeaderH1} >بازگشت به سایت</h1></Link> 
            <h2 className={Styles.manageHeaderH2}>
              <Link to= '/'> <img src={Logo} ></img></Link> 
                پنل مدیریت</h2>
        </div>
    );
}


