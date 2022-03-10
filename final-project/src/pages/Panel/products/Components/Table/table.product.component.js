
import React from 'react';
import styles from './table.product.module.css';
import {IMAGE_URL} from '../../../../../configs/image.url';
import { Icon } from '@iconify/react';
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';
import { loadCurrentItem } from '../../../../../redux/Shopping/shopping-actions';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import Modal from '../../../../../Components/Modal/modal.page'


const TableProductComponent = (props) => {
    const dispatch = useDispatch();
    let renderStatus = useSelector(state => state.renderStatus.renderStatus)

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


        <div className= {styles.tableHead}>

            
            
           <div className={styles.Btns}>
               <button 
               onClick = {() => handleClick(props)}
               >    
               <Icon icon="mdi:application-edit-outline" color="#ee2d40" width="30" height="30" />
               </button>
               <button onClick={submit}> 
               <Icon className={styles.deleteItem}   icon="mdi:delete" color="#ee2d40" width="30" height="30" />
               </button>
           </div>
           
            <div className={styles.List}>
            <h2 className={styles.h2Cat} >{props.category}</h2>
            </div>
            <div className={styles.List}>
            <h2 className={styles.h2Name} >{props.name}</h2>
            </div>
            <div className={styles.List}>
                <img className={styles.thumbnail} src={`${IMAGE_URL}${props.image}`} ></img>
                
            

            </div>


      </div>

    );
}

export default TableProductComponent;
