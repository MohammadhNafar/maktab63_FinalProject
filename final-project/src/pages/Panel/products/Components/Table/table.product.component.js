
import React from 'react';
import Styles from './table.product.module.css';
import {IMAGE_URL} from '../../../../../configs/image.url';


const TableProductComponent = (props) => {
    return (

        <div className= {Styles.tableHead}>
            
            
           <div className={Styles.Btns}>
               <button>ویرایش</button>
               <button>حذف</button>

           </div>
           
            <div className={Styles.List}>
            <h2>{props.categoryList}</h2>
            </div>
            <div className={Styles.List}>
            <h2>{props.nameList}</h2>
            </div>
            <div className={Styles.List}>
                <img className={Styles.thumbnail} src={`${IMAGE_URL}${props.PicList}`} ></img>
                
            

            </div>


      </div>

    );
}

export default TableProductComponent;
