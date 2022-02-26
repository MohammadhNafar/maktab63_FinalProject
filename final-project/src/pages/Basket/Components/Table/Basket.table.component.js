import React from 'react';
import Styles from './table.module.css';
import { Icon } from '@iconify/react';
import { removeFromCart } from '../../../../redux/Shopping/shopping-actions';
import { useDispatch } from 'react-redux';


const BasketTableComponent = (props) => {
    const dispatch = useDispatch();
    return (
        <div>
               <div className= {Styles.tableHead}>
               <div className={Styles.Btns}>
               
               <button className={Styles.rmvBtn} onClick={() => dispatch(removeFromCart(props.id))} >
               <Icon className={Styles.deleteItem}   icon="mdi:delete" color="#ee2d40" width="40" height="40" />
               </button>

           </div>
            <div className={Styles.List}>
            {/* <h2> <input className={Styles.inputQ} type='number'></input> </h2> */}
            <h2>{props.qty}</h2>
                
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
// const mapStateToProps = dispatch => {
//     return {
//         removeFromCart: (id) => dispatch(removeFromCart())
//     }
// }

// export default connect(null,mapStateToProps)(BasketTableComponent);

export default BasketTableComponent;
