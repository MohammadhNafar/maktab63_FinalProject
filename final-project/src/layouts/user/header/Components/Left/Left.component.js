import React from 'react';
import { Icon } from '@iconify/react';
import Styles from './Left.module.css';
import {Link} from 'react-router-dom';

const LeftComponent = () => {
    return (
        <div className= {Styles.container}>
            <Link to= '/Login' ><Icon className= {Styles.login} icon="mdi:account" color="black" width="30" height="120" />  </Link>

        <Icon  className= {Styles.cart} icon="dashicons:cart" color="black" width="30" height="120" />
              
               </div>
    );
}

export default LeftComponent;
