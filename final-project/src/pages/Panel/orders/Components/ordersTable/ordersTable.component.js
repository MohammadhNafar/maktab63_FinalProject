import React from 'react';
import Styles from './orders.module.css';

const OrderstableComponent = (props) => {



    
    return (
        <div className= {Styles.tableHead}>
            
            
        <div className={Styles.Btns}>
            <button 
            onClick = {() => props.show(true)}
            >بررسی سفارش</button>
           

        </div>
        <div className={Styles.List}>
         <h2 className={Styles.h2Name} >{props.date}</h2>
         </div>
         <div className={Styles.List}>
         <h2 className={Styles.h2Cat} >{props.price} تومان </h2>
         </div>
         <div className={Styles.List}>
         <h2 className={Styles.h2Name} >{props.name}</h2>

         </div>
         


   </div>

    );
}

export default OrderstableComponent;
