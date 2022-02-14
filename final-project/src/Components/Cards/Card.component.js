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
                <div className={Styles.priceSec} >
                    <div className={Styles.mojod} ><Icon className={Styles.cardIcon} icon="ic:baseline-event-available" color="#ee2d40" width="25" height="25"  /> 
                    <p>موجود در انبار</p>
</div>
                <h5>{props.Price} تومان</h5>
                </div>
                


            </div>
          
            
            </div>
        </div>
    );
}

export default CardComponent;
