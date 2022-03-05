
import React from 'react';
import Styles from './table.product.module.css';
import {IMAGE_URL} from '../../../../../configs/image.url';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';

import { loadCurrentItem } from '../../../../../redux/Shopping/shopping-actions';


const TableProductComponent = (props) => {
    const dispatch = useDispatch();
    const handleDelete = () => 
            {
                console.log(props.id)
                props.deleteFunc(props.id)
            }

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
               <button onClick={handleDelete}> 
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
