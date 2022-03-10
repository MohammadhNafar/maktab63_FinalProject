import React from 'react';
import Header from '../../layouts/user/header/Header';
import styles from './Product.module.css';
import BuyCard from './Components/buyCard/BuyCard.component';
import {getComments} from '../../api/comments.api';
import {useEffect, useState} from 'react';
import { Icon } from '@iconify/react';
import DataLoading from './Components/ProductPage Data Loading/ProductLoading.component'
import {connect} from 'react-redux'
import { fetchProduct } from '../../redux/Shopping/shopping.thunk';
import {IMAGE_URL} from '../../configs/image.url';
import {getProduct} from '../../api/products.api';
import {addToCart} from '../../redux/Shopping/shopping-actions'
import {useDispatch, useSelector} from 'react-redux';
import { fetchProducts } from '../../redux/Shopping/shopping.thunk';
import {Link} from 'react-router-dom';
import http from '../../services/http.service'
import {useParams} from 'react-router';
import BASE_URL from '../../configs/variable.config';
import Pagination from '../../Components/pagination/pagination.component';
import Comments from './Components/Coments/Comments.component';
import Footer from '../../layouts/user/footer/Footer';
import Card from '../../Components/Cards/Card.component';
const ProductPage = (props) => {

    const [like, setlike] = useState(0)
    const [dislike, setdislike] = useState(0)
    const [likeactive, setlikeactive] = useState(false)
    const [dislikeactive, setdislikeactive] = useState(false)
    const [username, setusername] = useState([]);
    const [comment, setcomment] = useState([]);
    const [score, setscore] = useState([]);
    const [email, setemail] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const productsNew = useSelector(state => state.shop.products.data)
    const proDatas = useSelector(state => state.shop)
    const loading = proDatas.loading;
    const error = proDatas.error;

    const dispatch = useDispatch();
    let {id} = useParams();
    
    

    async function sendComment(e) {

        
       

        let result = http.post(`${BASE_URL}/comments`, {
            username,
            comment,
            score,
            email,
            for: id,
            
        
        }
        )
        result = await result.json();
}

function likef() {
    if (likeactive) {
        setlikeactive(false)
        setlike(like - 1)
    } else {
        setlikeactive(true)
        setlike(like + 1)
        if (dislikeactive) {
            setdislikeactive(false)
            setlike(like + 1)
            setdislike(dislike - 1)
        }
    }
}

function dislikef() {
    if (dislikeactive) {
        setdislikeactive(false)
        setdislike(dislike - 1)
    } else {
        setdislikeactive(true)
        setdislike(dislike + 1)
        if (likeactive) {
            setlikeactive(false)
            setdislike(dislike + 1)
            setlike(like - 1)
        }
    }
}

const [rows, setRows] = useState([]);
const [product, setProduct] = useState([]);
 let proCategory = product?.map(data => data.category)
 let proName = product?.map(data => data.name)

console.log(proCategory)
useEffect(() => {
    dispatch(fetchProducts())
    //dispatch(fetchProduct(id));
    
    getComments().then(data => setRows(data.data))
    getProduct(id).then(data => setProduct(data.data))
}, [])

const datas = rows;
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = datas?.slice(indexOfFirstPost, indexOfLastPost)

 console.log(datas?.filter(value => value.for == id)) 
const paginate = (pageNumber) => setCurrentPage(pageNumber)
function test() {
    console.log("sd")
};

return (

    <div className={styles.container}>
        <Header/>
      

        <div className={styles.body}>

        {loading && <DataLoading/>}
                        
                        
                        {error && !loading && <div className={styles.dataError} > <h1>خطا در دریافت اطلاعات</h1> </div>}
            {
                product?.map(
                    data => <div>
                        <div className={styles.levels}>
                            <Link className={styles.Link} to="/">
                                <div >محصولات/</div>
                            </Link>
                            <Link className={styles.Link} to={`/Products/${data.category}`}>
                                <div >{data.category}</div>
                            </Link>
                          
                               / <div>{data.name}</div>
                           

                        </div>

                        <div className={styles.productSec}>

                            <div className={styles.information}>
                                <div className={styles.images}>
                                    <img className={styles.productIMG} src={`${IMAGE_URL}${data.image}`}></img>
                                    <div className={styles.littles}>
                                        <img className={styles.productLittleImg} src={`${IMAGE_URL}${data.image}`}></img>
                                        <img className={styles.productLittleImg} src={`${IMAGE_URL}${data.image}`}></img>
                                        <img className={styles.productLittleImg} src={`${IMAGE_URL}${data.image}`}></img>
                                    </div>

                                </div>
                                <div className={styles.center}>

                                    <h1></h1>
                                    <div className={styles.productInfo}>
                                        <p className={styles.pName}>
                                            {data.name}
                                        </p>
                                        <p className={styles.pBrand}></p>
                                        <p 
                                            className={styles.info}
                                            dangerouslySetInnerHTML={{__html: data.description && data.description}}
                                            >

                                            
                                        </p>
                                    </div>
                                  <div> 
                                      
                                  </div>
                                   <div className={styles.bottomIcons} >
                                  
                                       <Icon icon="mdi:food-halal" color="#ee2d40" width="30" height="30" /> 
                                        <Icon icon="mdi:share-variant" color="#ee2d40" width="30" height="30" />
                                        <Icon icon="mdi:food" color="#ee2d40" width="30" height="30" />
                                
                                        </div>
                                </div>

                            </div>

                             <BuyCard  count={data.count} price={data.price} id = {props.id}    id = {data.id}
                                    key = {data.id}
                        Name = {data.name}
                        info = {data.category}
                        Price = {data.price}
                        PicList = {data.image}
                        count = {data.count}
     /> 

                        </div>
                        
                    </div>
                    

                )
            }
        

        </div>
        {  !loading && !error &&   productsNew?.filter(value=> value.name == proName).length > 0 ?
        
                <div className={styles.same} >
                                                   <hr></hr>

                <h1>کالا های مشابه</h1>
                
                        <div className={styles.headerCategory} >
                        <h1></h1>
                        <Link
                        className={styles.Link}
                        to= {`/Products/${proCategory}`} >
                        <div className={styles.more} >
                           <p>نمایش محصولات بیشتر</p>
                           <Icon className={styles.iconMore} icon="ic:outline-more" color="#ee2d40" width="25" height="30" />
                       </div>
                        </Link>
                    
                        
                        
                        </div>
                            <div className={styles.biscSec}>
                                
                                {
                                    productsNew?.filter(value=> value.category == proCategory).
                                    slice(0, 4)
                                    
                                    .map(
                                        values => 
                                            <Card
                                            id = {values.id}
                                            key = {values.id}
                                Name = {values.name}
                                info = {values.category}
                                Price = {values.price}
                                PicList = {values.image}
                                count = {values.count}
            
                                />
                                        
                                    )
                             } 
            
                                </div>
                                </div>
        
        
        
        
       : <div className={styles.dataError} > <h1>محصولی وجود ندارد</h1> </div> }
    
                        

                        {productsNew?.filter(value=> value.name == proName).length > 0 ? 
                           <div className={styles.addComment}>
                               <hr></hr>
                           <h2>نظر خودرا راجع به {proName} بنویسید</h2>
                           <div className={styles.commentSec}>
                               <form onSubmit={sendComment}>
                                   <div className={styles.addCommentInputs}>
                                   <div className={styles.inputRight} >
                                   <input
                                       required="required"
                                       onChange={(e) => setusername(e.target.value)}
                                       className={styles.input}
                                       type='text'
                                       placeholder='نام'></input>
                                        <input
                                       required="required"
                                       onChange={(e) => setemail(e.target.value)}
                                       className={styles.input}
                                       type='text'
                                       placeholder='ایمیل'></input>
                                   <input
                                       required="required"
                                       onChange={(e) => setscore(e.target.value)}
                                       max="5"
                                       className={styles.inputScore}
                                       type='number'
                                       placeholder='امتیاز'></input>
                                   </div>
                                  <div className={styles.inputLeft}>
                                  <input
                                       required="required"
                                       onChange={(e) => setcomment(e.target.value)}
                                       className={styles.inputComment}
                                       type='text'
                                       placeholder='نظر'></input>
                               <button id="submit" className={styles.submitBtn}>ثبت نظر</button>
                                  </div>
                                  
                                   </div>
                                  
                                  
                               </form>
                               
                           </div>
                           <h1 className={styles.nazarat}>
                           نظرات <Icon icon="mdi:comment-text-multiple" color="#ee2d40" width="30" height="30" />
                       </h1>
               
                       </div>
                       : ""
                    
                    
                    
                    
                    
                    }
     
        {
            datas
                ?.filter(value => value.for == id)
                .length !== 0
                    ? <div>
                            {
                                datas?.filter(value => value.for == id)
                                        .map(
                                            values => <Comments
                                                key={values.id}
                                                score={values.score}
                                                username={values.username}
                                                userComment={values.comment}
                                                date = {values.createdAt}
                                                like={likef}
                                                dislike={dislikef}
                                                likes={like}
                                                dislikes={dislike}/>
                                        )
                            }
            
                           
                        </div>

                    : <div className={styles.noComment}>
                            <h1 className={styles.noCommentH1}>کامنتی برای نمایش وجود ندارد</h1>
                        </div>
        }
    <footer>
        <Footer/>
    </footer>
    </div>
);
}

const mapDispatchToProps = dispatch => {
return {
    addToCart: (id) => dispatch(addToCart(id))
}
}

export default connect(mapDispatchToProps)(ProductPage);
