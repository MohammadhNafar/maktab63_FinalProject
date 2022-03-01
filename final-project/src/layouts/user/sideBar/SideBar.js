import React from 'react';
import Styles from './sideBar.module.css'

const Sidebar = (props) => {
    return (
        <div>
            <div className={Styles.container}>
            <ul>
                <li key={props.key} >{props.titles}</li>
                
                

            </ul>
            </div>
            
        </div>
    );
}

export default Sidebar;
