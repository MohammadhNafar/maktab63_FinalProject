import React from 'react';
import Styles from './modal.module.css';

const ModalPage = (props) => {
    return (
        <div className={Styles.container}>
        
            <div className={Styles.modalBox}>
                <div className={Styles.closeBtn}>

                <button onClick={() => props.closeModal(false)} >x</button>

                </div>
                <div className={Styles.title}>
                <h1>
                    {props.titleHead}
                </h1>
                </div>
                <div className={Styles.items}>
                    
                    <input placeholder={props.placeHolder1} type='text'></input>
                    <input placeholder={props.placeHolder2} type='text' ></input>
                    <button>{props.firstBtnTitle}</button>
                    <button>{props.secendBtnTitle}</button>
                </div>

            </div>
        </div>
    );
}

export default ModalPage;
