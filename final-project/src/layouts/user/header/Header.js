import React from 'react';
import Styles from './Header.module.css';
import Left from './Components/Left/Left.component';
import Right from './Components/Right/Right.component';
import Logo from '../../../assets/images/logo.svg';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Sidebar from '../sideBar/SideBar';
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const Header = ({cart}) => {
    const dispatch = useDispatch();
    const [cartCount,setCartCount] = useState(0)
    useEffect(()=>{
         let count = 0;
         cart.forEach(item => {
             if (item.qty > item.count)
             {
                //toast.error(`${item.name}  بیشتر از تعداد موجود است`)
                 count = item.qty - item.qty
             }
                else
                {
                    count += item.qty
                }
                
          //count += item.qty 
          //item.qty > item.count ?   count = item.count : count += item.qty;
         });
         setCartCount(count)
    },[cart,cartCount])

    return (
        <div className={Styles.wrapper}>
            {/* <div className={Styles.addSec}>
             
            </div> */}
            
            
        <div className={Styles.container}>
            <Left
                        // {...cartCount.length < 0 ? "" : {cartNum} = {cartCount} }


            cartNum = {cartCount ? cartCount : ""}
            
            />
         <Link to='/'>
         <img className={Styles.homeLogo} src={Logo}></img>
         </Link>   
            <Right/>
            
        </div>
        <hr className={Styles.hrHeader}></hr>
        <div className={Styles.slideBar} >
            <Sidebar/>
        </div>
        </div>
        
        
    );
}

const mapStateToProps = state => {
    return {
         cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Header);
