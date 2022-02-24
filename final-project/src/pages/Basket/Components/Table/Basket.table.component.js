import React from 'react';
import Styles from './table.module.css';

const BasketTableComponent = (props) => {
    return (
        <div>
               <div className= {Styles.tableHead}>
               <div className={Styles.Btns}>
               <button 
               onClick = {() => props.show(true)}
               >حذف</button>
               

           </div>
            <div className={Styles.List}>
            <h2> <input className={Styles.inputQ} type='number'></input> </h2>

                
            </div>
            <div className={Styles.List}>
        
            <h2>{props.price}</h2>

            </div>
            <div className={Styles.List}>
            <h2>{props.product}</h2>


            </div>

      </div>
        </div>
    );
}

export default BasketTableComponent;
