import React from 'react';
import styles from './orders.module.css';
import { useDispatch } from 'react-redux';
import { loadCurrentItem } from '../../../../../redux/Orders/orders-actions';

const OrderstableComponent = (props) => {

    const dispatch = useDispatch();
    const id = props.id;
    function handleClick(props) {
        dispatch(loadCurrentItem(props));
        props.show(true);
    }
    
    return (
        <div className= {styles.tableHead}>
            
            
        <div className={styles.Btns}>
            <button 
            // onClick = {() => props.show(true)}
            onClick={() =>  handleClick(props) }
            >بررسی سفارش</button>
           

        </div>
        <div className={styles.List}>
         <h2 className={styles.h2Name} >{props.date}</h2>
         </div>
         <div className={styles.List}>
         <h2 className={styles.h2Cat} >{props.price} تومان </h2>
     

         </div>
         <div className={styles.List}>
         <h2 className={styles.h2Name} >{props.name}</h2>

         </div>
        
         


   </div>

    );
}

export default OrderstableComponent;
