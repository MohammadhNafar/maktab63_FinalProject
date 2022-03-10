import React from 'react';
import { Icon } from '@iconify/react';
import Styles from './Left.module.css';
import {Link} from 'react-router-dom';

const LeftComponent = (props) => {
    return (
        <div className= {Styles.container}>
            <div>
                 <span className={Styles.itemsInCart}>
                {props.cartNum}
            </span>
            </div>
           
            <Link to= '/Login' ><Icon className= {Styles.login} icon="mdi:account" color="#ee2d40" width="30" height="120" />  </Link>

      <Link to = '/Basket'> <Icon  className= {Styles.cart}  icon="mdi:cart-variant" color="#ee2d40" width="30" height="120" /> 
                       </Link>  
               </div>
    );
}

export default LeftComponent;
