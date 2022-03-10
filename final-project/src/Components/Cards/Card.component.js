import React from 'react';
import Styles from './card.module.css';
import {IMAGE_URL} from '../../configs/image.url';
import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { useDispatch } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
import {toast} from 'react-toastify'

import { addToCart   } from '../../redux/Shopping/shopping-actions' 
const CardComponent = (props) => {

    const dispatch = useDispatch();
    let  styless = {
        backgroundColor: 'rgba(180, 180, 180, 0.199)' ,
        border: '0.5px solid rgba(129, 129, 129, 0.726)'
    }

    function addCart (id) {
        dispatch(addToCart(id))
        toast.success(`${props.Name}  به سبد خرید اضافه شد`)
    }

    return (
        // <Link className={Styles.Link} to={props.linkToPage} >
        <div>
            {
                props.count > 0 ?

                 <div className={Styles.box}>
        
                 <div className={Styles.allBox}>
                 <div className={Styles.boxHead} >
                     {props.count > 0 ?
                                 <img className={Styles.productImg} src={`${IMAGE_URL}${props.PicList}`}></img>
                                 :
                                <div className={Styles.unavalibeImg}>  <img  src={`${IMAGE_URL}${props.PicList}`}></img></div> 
                                 
                 
                 }
                 </div>
                 <div className={Styles.boxMid}>
                     <h3>{props.Name}</h3>
                     <h4>{props.info}</h4>

                     <div className={Styles.btns}>
                         {props.count > 0 ?  
                          <button className={Styles.addToCartBtn}
                          
                          onClick={() => addCart(props.id) }
                          
                          > اضافه کردن به سبد خرید </button> 
                          
                          :
                             ""
                     
                     }
                    
     
     
                     <Link to={`/Product/${props.id}`}>
                     <button className={Styles.infoBtn}
                     
                     
                     >نمایش اطلاعات </button> 
                     </Link>
                    
                     </div>
                    
                    
                         {props.count > 0 ?
                          <div className={Styles.priceSec} >
                              <div className={Styles.mojod} ><Icon className={Styles.cardIcon} icon="ic:baseline-event-available" color="#ee2d40" width="25" height="25"  />
                         
                         <p>موجود در انبار</p>
     </div>
                     <h5>{props.Price} تومان</h5>
     
                       </div>
                       : <div className={Styles.mojod} ><Icon className={Styles.cardIcon} icon="gg:unavailable" color="#ee2d40" width="25" height="25"  />
                         
                       <p>ناموجود</p>
     </div>
                     
                     }
                         
                     
                   
                     
     
     
                 </div>
               
                 
                 </div>
             </div>
           : 

           <div style={styless} className={Styles.box}>
        
           <div className={Styles.allBox}>
           <div className={Styles.boxHead} >
               {props.count > 0 ?
                           <img className={Styles.productImg} src={`${IMAGE_URL}${props.PicList}`}></img>
                           :
                           <img className={Styles.unavalibeImg} src={`${IMAGE_URL}${props.PicList}`}></img>
                           
           
           }
           </div>
           <div className={Styles.boxMid}>
               <h3>{props.Name}</h3>
               <h4>{props.info}</h4>
               {/* <div onClick = {() => props.show(true)} className={Styles.cardInfoSec}>
               <Icon className={Styles.infoIcon} icon="ic:baseline-more" color="#ee2d40" width="25" height="25" />
               <button className={Styles.infoButton}  >جزئیات</button>
               </div> */}
               <div className={Styles.btns}>
                   {props.count > 0 ?  
                    <button className={Styles.addToCartBtn}
                    
                    onClick={() => dispatch(addToCart(props.id)) }
                    
                    > اضافه کردن به سبد خرید </button> 
                    
                    :
                       ""
               
               }
              


               <Link to={`/Product/${props.id}`}>
               <button className={Styles.infoBtn}
               
               
               >نمایش اطلاعات </button> 
               </Link>
              
               </div>
              
              
                   {props.count > 0 ?
                    <div className={Styles.priceSec} >
                        <div className={Styles.mojod} ><Icon className={Styles.cardIcon} icon="ic:baseline-event-available" color="#ee2d40" width="25" height="25"  />
                   
                   <p>موجود در انبار</p>
</div>
               <h5>{props.Price} تومان</h5>

                 </div>
                 : <div className={Styles.mojod} ><Icon className={Styles.cardIcon} icon="gg:unavailable" color="#ee2d40" width="25" height="25"  />
                   
                 <p>ناموجود</p>
</div>
               
               }
                   
               
             
               


           </div>
         
           
           </div>
       </div>
           
           
           }
       
        </div>
        // </Link>
    );
}
// const mapDispatchToProps = dispatch =>
// {
//     return{
//         addToCart: (id) => dispatch (addToCart(id))
//     }
// }

    export default CardComponent;

// export default connect(null, mapDispatchToProps)(CardComponent);
