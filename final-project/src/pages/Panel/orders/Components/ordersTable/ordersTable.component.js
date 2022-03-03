import React from 'react';
import Styles from './orders.module.css';
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
        <div className= {Styles.tableHead}>
            
            
        <div className={Styles.Btns}>
            <button 
            // onClick = {() => props.show(true)}
            onClick={() =>  handleClick(props) }
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
