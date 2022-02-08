import React from 'react';
import { Icon } from '@iconify/react';
import Styles from './Left.module.css';

const LeftComponent = () => {
    return (
        <div className= {Styles.container}>
        <Icon className= {Styles.login} icon="mdi:account" color="black" width="40" height="120" /> 
        <Icon  className= {Styles.cart} icon="dashicons:cart" color="black" width="40" height="120" />
              
               </div>
    );
}

export default LeftComponent;
