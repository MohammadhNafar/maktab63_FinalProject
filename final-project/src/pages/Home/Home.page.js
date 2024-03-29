import React from 'react';
import Header from '../../layouts/user/header/Header';
import Middle from './components/middle/middle.component';
import styles from './home.page.module.css';
import Card from '../../Components/Cards/Card.component';
import DataError from './components/DataError/DataError.component'
import DataLoading from './components/Loading/Loading.component'
import {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../redux/Shopping/shopping.thunk';
import {getProducts,getCategorys} from '../../api/products.api';
import {Link} from 'react-router-dom';
import {Icon} from '@iconify/react';
import Footer from '../../layouts/user/footer/Footer';
const HomePage = () => {
    const dispatch = useDispatch();
    const productsNew = useSelector(state => state?.shop?.products?.data)
    
    const proDatas = useSelector(state => state.shop)
    const loading = proDatas.loading
    const error = proDatas.error
    const [rows, setRows] = useState([]);
    const categorys =  rows?.map(data =>  data.category) 
    let setObject = new Set(categorys);
    let categorysArray = Array.from(setObject);
    console.log(categorysArray)
    
    //let categorysArray = Array.from(setObject);
   
    useEffect(() => {
        dispatch(fetchProducts())
        getCategorys().then(data => setRows(data.data))
    }, [])

    return (
    <div className={styles.container}>

        <Header/> 

            <div className={styles.Mid}>
                    <Middle/>

                    <div className={styles.dataLoad}>
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                        {loading && <DataLoading/>}
                    </div>

                    {error && !loading && <DataError/>}

                    <div className={styles.listHome}></div>
                </div>
                <div className={styles.bodySec}>
              

                    <div className={styles.products}>

                        <div className={styles.firstSec}>
                        {
                                    !loading && !error && <div className={styles.headerAll}>
                                   
                                    <Link className={styles.Link} to='/AllProducts'>
                                    <div className={styles.more}>
                                            <h1>همه محصولات</h1>
                                            <Icon
                                                className={styles.iconMore}
                                                icon="ic:outline-more"
                                                color="#ee2d40"
                                                width="30"
                                                height="70"/>
                                        </div>
                                    </Link>

                                </div>
                                }

                            <div className={styles.firstSecCards}>
                               
                                {
                                 productsNew && productsNew.slice(0, 4)
                                        ?.map(
                                            data => <Card
                                                id={data.id}
                                                key={data.id}
                                                Name={data.name}
                                                info={data.category}
                                                Price={data.price}
                                                PicList={data.image}
                                                count={data.count}/>
                                        )
                                }
                               

                            </div>
                        </div>

                        <div className={styles.secondSec}>
        
                        </div>
                      <div>
                       { !loading && !error &&
                              <div>
                                  {categorysArray?.map(
                                        values => 
                                        <div> 
                                            <div className={styles.headerCategory} >
                                            <h1>{values}</h1>
                                            <Link
                                            className={styles.Link}
                                            to={`/Products/${values}`}>
                                                
                                                  <div className={styles.more}>
                                            <p>نمایش محصولات بیشتر</p>
                                            <Icon
                                                className={styles.iconMore}
                                                icon="ic:outline-more"
                                                color="#ee2d40"
                                                width="25"
                                                height="30"/>
                                        </div>
                                               
                                                </Link>
                                                 </div>
                                         <div className={styles.biscSec} >
                                                {
                                                    productsNew?.filter(value=> value.category == values).length > 0 ? 
                                                    productsNew?.filter(value=> value.category == values).slice(0, 4)
                                                        .map(
                                                            data => <Card
                                                                id={data.id}
                                                                key={data.id}
                                                                Name={data.name}
                                                                info={data.category}
                                                                Price={data.price}
                                                                PicList={data.image}
                                                                count={data.count}/>
                                                        )
                                             : "محصولی جهت نمایش وجود ندارد"   }
                                           
                                            </div></div>
                                 )}  
                                   </div>
                          } 
                       
                      </div>

                    </div>
                            
                </div>

                <footer>
                    <Footer/>
                </footer>
                    
            </div>

        );
    }

        export default HomePage;