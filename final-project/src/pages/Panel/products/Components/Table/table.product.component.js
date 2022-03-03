
import React from 'react';
import Styles from './table.product.module.css';
import {IMAGE_URL} from '../../../../../configs/image.url';
import { Icon } from '@iconify/react';


const TableProductComponent = (props) => {
    const handleDelete = () => 
            {
                console.log(props.id)
                props.deleteFunc(props.id)
            }

                return (


        <div className= {Styles.tableHead}>
            
            
           <div className={Styles.Btns}>
               <button 
               onClick = {() => props.show(true)}
               >ویرایش</button>
               <button onClick={handleDelete}> 
               <Icon className={Styles.deleteItem}   icon="mdi:delete" color="#ee2d40" width="30" height="30" />
               </button>
           </div>
           
            <div className={Styles.List}>
            <h2 className={Styles.h2Cat} >{props.categoryList}</h2>
            </div>
            <div className={Styles.List}>
            <h2 className={Styles.h2Name} >{props.nameList}</h2>
            </div>
            <div className={Styles.List}>
                <img className={Styles.thumbnail} src={`${IMAGE_URL}${props.PicList}`} ></img>
                
            

            </div>


      </div>

    );
}

export default TableProductComponent;
