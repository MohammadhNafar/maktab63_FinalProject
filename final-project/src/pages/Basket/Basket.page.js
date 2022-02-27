import React from 'react';
import Header from '../../layouts/user/header/Header';
import Styles from './basket.module.css';
import Table from './Components/Table/Basket.table.component';
import {connect} from 'react-redux';
import {useState, useEffect} from 'react';
import Empty from './Components/empty/Empty.basket.component'

const BasketPage = ({cart}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const send = 12000;

    useEffect(() => {

        let items = 0;
        let price = 0;
        cart.forEach(item => {
            items += item.qty;
            price += item.qty * item.price
        });
        setTotalPrice(price);
        setTotalItems(items);
    }, [cart, totalItems, totalPrice, setTotalPrice, setTotalItems]);
    return (
        <div className={Styles.container}>
            <Header/>
            <hr className={Styles.hrHeader}></hr>
            <div className={Styles.h1Head}>
                <h1 >
                    سبد خرید
                </h1>
            </div>

            <div className={Styles.wrapper}>
                {
                    totalItems
                        ? <div className={Styles.tableHead}>
                                <h1></h1>
                                <h1>تعداد</h1>
                                <h1>قیمت</h1>
                                <h1>نام کالا
                                </h1>

                            </div>
                        : ""
                }

                {
                    cart.length > 0
                        ? ""
                        : <Empty/>
                }
                {
                    cart.map(item => (
                        <Table
                            count = {item.count}
                            key={item.id}
                            product={item.name}
                            price={item.price}
                            qty={item.qty}
                            id={item.id}/>
                            
                    ))
                }

                {
                    totalItems
                        ? <div className={Styles.totalItems}>

                                تعداد کالا ها : {totalItems}
                            </div>
                        : ""
                }
                {
                    totalItems
                        ? <div className={Styles.priceSec}>
                                <div className={Styles.priceSecP}>
                                    {
                                        totalPrice
                                            ? <div className={Styles.totalPrice}>
                                                    قیمت نهایی {totalPrice}
                                                    تومان

                                                </div>
                                            : ""
                                    }
                                    {
                                        totalItems
                                            ? totalPrice < 300000
                                                ? <div className={Styles.sendPrice}>
                                                        {totalPrice + send}
                                                        قیمت با هزینه ارسال
                                                    </div>
                                                : <div className={Styles.freeSend}>
                                                        هزینه ارسال خرید های بیشتر 300 هزار تومان رایگان است !
                                                    </div>
                                            : ""
                                    }

                                </div>

                                {
                                    totalItems
                                        ? <button className={Styles.confirmBtn}>
                                                نهایی کردن خرید
                                            </button>
                                        : ""
                                }
                            </div>

                        : ""
                }

            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {cart: state.shop.cart}
}
export default connect(mapStateToProps)(BasketPage);
