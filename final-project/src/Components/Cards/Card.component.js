import React from 'react';
import Styles from './card.module.css';
import {IMAGE_UR, IMAGE_URL} from '../../configs/image.url';
import { Icon } from '@iconify/react';
const CardComponent = (props) => {
    return (
        <div className={Styles.box}>
            <div className={Styles.allBox}>
            <div className={Styles.boxHead} >
            <img className={Styles.productImg} src={`${IMAGE_URL}${props.PicList}`}></img>
            </div>
            <div className={Styles.boxMid}>
                <h3>{props.Name}</h3>
                <h4>{props.info}</h4>
                <h5>{props.Price} تومان</h5>


            </div>
          
            
            </div>
        </div>
    );
}

export default CardComponent;
