import React from 'react';
import Styles from './buyCard.module.css';
import { Icon } from '@iconify/react';

const BuycardComponent = (props) => {
    return (
        <div className={Styles.buyBox}>
            <div className={Styles.boxItems}>

            <h1>{props.price} تومان </h1>
            <div className={Styles.delivery}>
                
            <Icon icon="ic:twotone-delivery-dining" color="#ee2d40" width="30" height="55" />
            <p>ارسال سریع</p>
            </div>
            {
                props.count > 0 ?
                 <div className={Styles.mojod} ><Icon className={Styles.cardIcon} icon="ic:baseline-event-available" color="#ee2d40" width="30" height="55"  /> 
                    <p>موجود در انبار</p>  </div> :
                    <div className={Styles.mojod} ><Icon icon="gg:unavailable" color="#ee2d40" width="30" height="55" />
                    <p>ناموجود</p>  </div>
                    
                    
                    
           
            }
           


    
            { props.count > 0 ? 
                        <button className={Styles.addButton}>افزودن به سبد خرید</button>
                        : <h1 className={Styles.namojod} >ناموجود</h1>

            }
            </div>
            
        </div>
    );
}

export default BuycardComponent;
