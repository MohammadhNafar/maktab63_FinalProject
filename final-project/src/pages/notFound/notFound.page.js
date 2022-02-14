import React from 'react';
import Styles from './notFound.module.css';
import Header from '../../layouts/user/header/Header';
import IMG from '../../assets/images/404NotFound.png';
import {Link} from 'react-router-dom';

const NotfoundPage = () => {
    return (
        <div>
            <Header/>
            <div className={Styles.notFoundWrapper}>
                    <div className={Styles.notFoundImage}>

                        
                    </div>
                    <h1>صفحه مورد نظر پیدا نشد !</h1>

                    <Link className={Styles.notFoundLink} to="/" >
                        <h1> صفحه اصلی  </h1>
                        </Link>
            </div>
            
        </div>
    );
}

export default NotfoundPage;
