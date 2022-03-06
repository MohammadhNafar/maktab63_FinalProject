
import React from 'react';
import Styles from './table.product.module.css';
import {IMAGE_URL} from '../../../../../configs/image.url';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { loadCurrentItem } from '../../../../../redux/Shopping/shopping-actions';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import Modal from '../../../../../Components/Modal/modal.page'

const TableProductComponent = (props) => {
    const dispatch = useDispatch();
    
   const  submit = () => {
        confirmAlert({
            
          title: 'تایید حذف',
          message: 'آیا از حذف این محصول اطمینان دارید؟',
          buttons: [
            {
              label: 'بله',
              onClick: () =>  {
                console.log(props.id)
                 props.deleteFunc(props.id)
                 window.location.reload()
            }
            },
            {
              label: 'خیر',
              onClick: () => ""
            }
          ]
        });
      };

            function handleClick(props) {
                dispatch(loadCurrentItem(props));
                props.show(true);
                console.log(props)
           
            }



                return (


        <div className= {Styles.tableHead}>

            
            
           <div className={Styles.Btns}>
               <button 
               onClick = {() => handleClick(props)}
               >ویرایش</button>
               <button onClick={submit}> 
               <Icon className={Styles.deleteItem}   icon="mdi:delete" color="#ee2d40" width="30" height="30" />
               </button>
           </div>
           
            <div className={Styles.List}>
            <h2 className={Styles.h2Cat} >{props.category}</h2>
            </div>
            <div className={Styles.List}>
            <h2 className={Styles.h2Name} >{props.name}</h2>
            </div>
            <div className={Styles.List}>
                <img className={Styles.thumbnail} src={`${IMAGE_URL}${props.image}`} ></img>
                
            

            </div>


      </div>

    );
}

export default TableProductComponent;
