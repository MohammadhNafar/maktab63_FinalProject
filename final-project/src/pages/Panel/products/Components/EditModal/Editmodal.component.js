import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './editmodal.module.css'
const Editmodal = (props) => {
    const dispatch = useDispatch();
    const modalData = useSelector(state => state.shop.modal)
    console.log("modaldata", modalData.nameList)
    

  
    return (
        <div className={styles.container}>

            <div className={styles.modalBox}>
                <div className={styles.closeBtn}>

                    <button onClick={() => props.closeModal(false)} >x</button>

                </div>
                <div className={styles.title}>
                    <h1>
                       اطلاعات کامل محصول
                    </h1>
                </div>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <p> نام کالا : <span className={styles.spans}>{modalData.nameList} </span>  </p>
                        <p>  برند کالا : <span className={styles.spans}>{modalData.brand} </span>  </p>
                        <p>  قیمت کالا : <span className={styles.spans}>{modalData.price} </span>  </p>
                        <p>  موجودی: <span className={styles.spans}>{modalData.count} </span>  </p>
                    </div>
                   
                



                </div>

            </div>
        </div>
    );
}


export default Editmodal;
