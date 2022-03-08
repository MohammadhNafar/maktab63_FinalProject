import React, {useState} from 'react';
import Styles from './table.module.css';
import { Icon } from '@iconify/react';
import { removeFromCart,adjustItemQty } from '../../../../redux/Shopping/shopping-actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {IMAGE_URL} from '../../../../configs/image.url';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

const BasketTableComponent = (props) => {
    const dispatch = useDispatch();
    const [input,setInput] = useState(props.qty);
    const onChangeHandler = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
      dispatch(adjustItemQty(props.id,e.target.value));
    }


    const  submit = () => {
      confirmAlert({
          
        title: 'تایید حذف',
        message: `آیا میخواهید ${props.product} را از سبد خرید حذف کنید؟`,
        buttons: [
          {
            label: 'بله',
            onClick: () =>  {
              dispatch(removeFromCart(props.id))
          }
          },
          {
            label: 'خیر',
            onClick: () => ""
          }
        ]
      });
    };





















    return (
        <div className={Styles.wrapper} >
               <div className= {Styles.tableHead}>
               <div className={Styles.Btns}>
               
               <button className={Styles.rmvBtn} onClick={submit} >
               <Icon className={Styles.deleteItem}   icon="mdi:delete" color="#ee2d40" width="40" height="40" />
               </button>

           </div>
            <div className={Styles.List}>
            {/* <h2> <input className={Styles.inputQ} type='number'></input> </h2> */}
            
            <input
            id='qty'
            name='qty'
            min='1'
            max= {props.count}
            value={input}
            onChange={onChangeHandler}
            className={Styles.qtyy} type='number' ></input>
            

                
            </div>
            <div className={Styles.List}>
        
            <h2>{props.price} تومان </h2>

            </div>
            <div className={Styles.List}>
              <Link className={Styles.linkToProduct} to= {`/Product/${props.id}`} >
              <h2>{props.product}</h2>
              </Link>
            </div>
        <div className={Styles.ListPic}>
        <img className={Styles.productImg} src={`${IMAGE_URL}${props.PicList}`}></img>
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
