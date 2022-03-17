import React from 'react';
import Styles from './Right.module.css';
import { useState } from 'react';
import Sidebar from '../../../sideBar/SideBar';
import { useNavigate } from 'react-router';
const RightComponent = () => {
    const Nav = useNavigate();
    const [search, setSearch] = useState('');
    function handleChange(e) {
        setSearch(e.target.value);
        console.log(search);
    }
    return (
        <div className={Styles.wrapper}>
        <div className= {Styles.right}>
           <input
           type='text'
            placeholder='Search'
            value={search}
            onChange={handleChange}

           />
            <button
            onClick= {() => {
                if (search) {
                    Nav('/Search/' + search);
                }
            }}
             
            >Search</button>
        </div>
        
        </div>
    );
}

export default RightComponent;
