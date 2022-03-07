import {useEffect, useState, useRef} from 'react';
import Styles from './sideBar.module.css';
import {getProducts} from '../../../api/products.api';
import { Link } from 'react-router-dom';
const Sidebar = (props) => {

    const [rows, setRows] = useState([]);
       const categorys =  rows?.map(data =>  data.category) 
       let setObject = new Set(categorys);
         let categorysArray = Array.from(setObject);
        console.log(categorysArray)
    useEffect(() => {
        getProducts().then(data => setRows(data.data))
        console.log(rows, 'hello')
    }, [])

    return (
        <div>
            <div className={Styles.container}>
            <ul>    
              {
                categorysArray.map(category => {
                    return  <Link className={Styles.Link} to={`/Products/${category}`} ><li >{category}</li></Link> 
                    })
              }
              
                
                

            </ul>
            </div>
              

              










        </div>
    );
}

export default Sidebar;
