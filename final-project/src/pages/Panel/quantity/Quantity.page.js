import React from 'react';
import Header from '../../../layouts/manage/header/Header';
import Table from './Components/Table/Table';
import Styles from './quantity.module.css';
import {useEffect, useState} from 'react';
import {getProducts} from '../../../api/products.api';
import Pagination from '../../../Components/pagination/pagination.component';
import { editData } from '../../../api/panel.api';
import { useSelector ,useDispatch} from 'react-redux'
const QuantityPage = () => {
    const dispatch = useDispatch();
    const [rows, setRows] = useState([]);
    const [filteredData, setFilter] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [isShow, setIsShow] = useState(false);
    const [newState , setNewState] = useState([]);

    let renderStatus = useSelector(state => state.renderStatus.renderStatus)

    useEffect(() => {
        getProducts().then(data => setRows(data.data))
    
    }, [])

    const handleChange = ({target} ,i) => {

        const { value,name } = target;
        const newState = [...rows];
        newState[i] = {
        ...newState[i],
        [name]: value
        };
         const sendData = newState.filter((newState , index ) => newState.price !== rows[index].price || newState.count !== rows[index].count)
        setNewState(sendData);
        setRows(newState);
         setIsShow(true);
    }
    const handelClick = (e) => {
        setIsShow(false);
       dispatch({type: 'RE_RENDER_STATUS', payload: !renderStatus})
       newState.map(item => {
            const id = item.id;
            console.log(item);
            const data = {...item }
            try {  
                editData({id ,data})
                .then(res => {
                     console.log(res);
                })
            } catch (e) {
                return Promise.reject(e)
            }
        })
    }







   


const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = rows.slice(indexOfFirstPost, indexOfLastPost)
const filterdPaginate = filteredData.slice(indexOfFirstPost, indexOfLastPost);
//change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

return (

    <div>
        <Header/>
        <div className={Styles.buttons}>
            <button
                onClick={(e) => {

                    e.preventDefault();

                    setFilter(rows.filter(item => item.count > 0))

                }}>
                نمایش کالا های موجود
            </button>
            <button
                onClick={(e) => {
                    window
                        .location
                        .reload();
                }}>نمایش همه
            </button>
            {
                isShow && <button onClick={handelClick} >
                ذخیره
            </button>

            }
            
        </div>
        <div className={Styles.wrapper}>
            <div className={Styles.title}>
                <h1>موجودی ها</h1>
            </div>
            <div className={Styles.tableHead}>
                <h1>موجودی</h1>
                <h1>قیمت</h1>
                <h1>نام کالا
                </h1>

            </div>
            <div className={Styles.quantityList}>
                {
                    filterdPaginate.length > 0
                        ? filterdPaginate.map(
                            data => <Table
                                key={data.id}
                                nameList={data.name}
                                priceList={ `${data.price} تومان` }

                                quanitityList={data.count}/>

                        )
                        : currentPosts.map(
                            ({id , name , price , count},index) => <Table
                                key={id}
                                nameList={name}
                                priceList={ <input type='number'  name='price' value={price} onChange={(e) => handleChange(e, index)} />}
                                quanitityList={<input type='number'  name='count' value={count} onChange={(e) => handleChange(e, index)} />}/>

                        )
                }
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={rows.length}
                    paginate={paginate}/>
            </div>
        </div>
    </div>
);
}

export default QuantityPage;
