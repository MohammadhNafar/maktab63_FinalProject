import React from 'react';
import Styles from './card.module.css';
import {IMAGE_UR, IMAGE_URL} from '../../configs/image.url';
import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { addToCart,   } from '../../redux/Shopping/shopping-actions' 
const CardComponent = (props , addToCart , loadCurrentItem) => {
    return (
        // <Link className={Styles.Link} to={props.linkToPage} >
        <div className={Styles.box}>
            <div className={Styles.allBox}>
            <div className={Styles.boxHead} >
            <img className={Styles.productImg} src={`${IMAGE_URL}${props.PicList}`}></img>
            </div>
            <div className={Styles.boxMid}>
                <h3>{props.Name}</h3>
                <h4>{props.info}</h4>
                {/* <div onClick = {() => props.show(true)} className={Styles.cardInfoSec}>
                <Icon className={Styles.infoIcon} icon="ic:baseline-more" color="#ee2d40" width="25" height="25" />
                <button className={Styles.infoButton}  >جزئیات</button>
                </div> */}
                <div className={Styles.btns}>
                <button
                onClick={() => addToCart(props.id)}
                
                >اضافه کردن به سبد خرید</button> 


                <Link to={`/Product/${props.id}`}>
                <button
                
                
                >نمایش اطلاعات</button> 
                </Link>
               
                </div>
               
                <div className={Styles.priceSec} >
                    <div className={Styles.mojod} ><Icon className={Styles.cardIcon} icon="ic:baseline-event-available" color="#ee2d40" width="25" height="25"  />
                    
                    <p>موجود در انبار</p>
</div>
                <h5>{props.Price} تومان</h5>
                
                </div>
                


            </div>
          
            
            </div>
        </div>
        // </Link>
    );
}
const mapDispatchToProps = dispatch =>
{
    return{
        addToCart: (id) => dispatch (addToCart(id))
    }
}

export default connect(null, mapDispatchToProps)(CardComponent);
