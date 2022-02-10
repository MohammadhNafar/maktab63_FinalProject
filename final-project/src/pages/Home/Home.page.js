import React from 'react';
import Header from '../../layouts/user/header/Header';
import Middle from './components/middle/middle.component';
import Styles from '../../assets/styles/home.page.css';


const HomePage = () => {
    return (
        <div className={Styles.container}>
          
                <Header/>
            
            <div className= {Styles.Mid} >
            <Middle/>

            </div>



        </div>
        
    );
}

export default HomePage;
