import React from 'react';
import Styles from './Header.module.css';
import Left from './Components/Left/Left.component';
import Right from './Components/Right/Right.component';
import Logo from '../../../assets/images/logo.svg';
import {Link} from 'react-router-dom';



const Header = () => {
    return (
        <div className={Styles.container}>
            <Left/>
         <Link to='/'>
         <img className={Styles.homeLogo} src={Logo}></img>
         </Link>   
            <Right/>
            
        </div>
    );
}

export default Header;
