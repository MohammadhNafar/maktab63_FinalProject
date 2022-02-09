import React from 'react';
import Styles from './Header.module.css';
import Left from './Components/Left/Left.component';
import Right from './Components/Right/Right.component';
import Logo from '../../../assets/images/logo.svg';


const Header = () => {
    return (
        <div className={Styles.container}>
            <Left/>
            <img className={Styles.homeLogo} src={Logo}></img>
            <Right/>
            
        </div>
    );
}

export default Header;
