import React from 'react';
import Styles from './list.module.css';

const ListComponent = (props) => {
    return (
        <div className={Styles.listContainer}>
            <div className={Styles.listBtns}>

            <button>{props.btnTitle}</button>
           

            

            </div>
           
            
        </div>
    );
}

export default ListComponent;
