import React from 'react';
import Header from '../../layouts/user/header/Header';
import Middle from './components/middle/middle.component';
import Styles from './home.page.module.css';
import Card from '../../Components/Cards/Card.component';
import DataError from './components/DataError/DataError.component'
import DataLoading from './components/Loading/Loading.component'
import {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../redux/Shopping/shopping.thunk';
import lottie from 'lottie-web';
import List from './components/List/List.component'
import Sidebar from '../../layouts/user/sideBar/SideBar';
import {Link} from 'react-router-dom';
import {Icon} from '@iconify/react';
import Footer from '../../layouts/user/footer/Footer';
const HomePage = () => {
    const dispatch = useDispatch();
    const productsNew = useSelector(state => state.shop.products.data)
    const proDatas = useSelector(state => state.shop)
    const loading = proDatas.loading
    const error = proDatas.error
    const container = useRef(null)
    // let categorys ;  console.log([productsNew.category])   console.log(categorys)
    // productsNew?.filter(value=> value.category == "شکلات").map {     values =>
    // console.log(values.name) }  let productsSet = [...new Set(productsNew)]
    // console.log( productsSet)

    useEffect(() => {
        dispatch(fetchProducts())

    }, [])

    return (<div className={Styles.container}>

        <Header/> {
            /* { productsNew.map(data =>
             <List
             key = {data.id}
             btnTitle = {data.category}
             />
            ) */
            }
           

            <div className={Styles.Mid}>
                    <Middle/>

                    <div className={Styles.dataLoad}>
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

                    <div className={Styles.listHome}></div>
                </div>
                <div className={Styles.bodySec}>
                    {/* <div className={Styles.sideBarContent}>
                { productsNew?.filter(value=> value.category == 'شکلات').map(
                 values =>
                 <Sidebar
                 key = {values.id}
                 titles = {values.category}
                 />
            )
}
                </div> */
                    }

                    <div className={Styles.products}>

                        <div className={Styles.firstSec}>

                            <div className={Styles.firstSecCards}>
                                {
                                    productsNew
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

                        {
                            !loading && !error && <div className={Styles.headerCategory}>
                                    <h1>شکلات ها</h1>
                                    <Link className={Styles.Link} to='/Products/شکلات'>
                                        <div className={Styles.more}>
                                            <p>نمایش محصولات بیشتر</p>
                                            <Icon
                                                className={Styles.iconMore}
                                                icon="ic:outline-more"
                                                color="#ee2d40"
                                                width="25"
                                                height="30"/>
                                        </div>
                                    </Link>

                                </div>
                        }

                        <div className={Styles.chokoSec}>

                            {
                                productsNew?.filter(value => value.category == 'شکلات')
                                        .slice(0, 3)
                                        .map(
                                            values => <Card
                                                id={values.id}
                                                key={values.id}
                                                Name={values.name}
                                                info={values.category}
                                                Price={values.price}
                                                PicList={values.image}
                                                count={values.count}/>

                                        )
                            }

                        </div>
                        {
                            !loading && !error && <div className={Styles.headerCategory}>
                                    <h1>بیسکوییت ها</h1>
                                    <Link className={Styles.Link} to='/Products/بیسکوییت'>
                                        <div className={Styles.more}>
                                            <p>نمایش محصولات بیشتر</p>
                                            <Icon
                                                className={Styles.iconMore}
                                                icon="ic:outline-more"
                                                color="#ee2d40"
                                                width="25"
                                                height="30"/>
                                        </div>
                                    </Link>

                                </div>
                        }
                        <div className={Styles.biscSec}>

                            {
                                productsNew
                                    
                                        ?.filter(value => value.category == 'بیسکوییت')
                                        .slice(0, 3)
                                        .map(
                                            values => <Card
                                                id={values.id}
                                                key={values.id}
                                                Name={values.name}
                                                info={values.category}
                                                Price={values.price}
                                                PicList={values.image}
                                                count={values.count}/>

                                        )
                            }

                        </div>
                        {
                            !loading && !error && <div className={Styles.headerCategory}>
                                    <h1>کیک ها</h1>
                                    <Link className={Styles.Link} to='/Products/کیک'>
                                        <div className={Styles.more}>
                                            <p>نمایش محصولات بیشتر</p>
                                            <Icon
                                                className={Styles.iconMore}
                                                icon="ic:outline-more"
                                                color="#ee2d40"
                                                width="25"
                                                height="30"/>
                                        </div>
                                    </Link>

                                </div>
                        }
                        <div className={Styles.biscSec}>

                            {
                                productsNew
                                    
                                        ?.filter(value => value.category == 'کیک')
                                        .slice(0, 3)
                                        .map(
                                            values => <Card
                                                id={values.id}
                                                key={values.id}
                                                Name={values.name}
                                                info={values.category}
                                                Price={values.price}
                                                PicList={values.image}
                                                count={values.count}/>

                                        )
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