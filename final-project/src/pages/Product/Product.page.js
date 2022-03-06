import React from 'react';
import Header from '../../layouts/user/header/Header';
import Styles from './Product.module.css';
import BuyCard from './Components/buyCard/BuyCard.component';
import {getComments} from '../../api/comments.api';
import {useEffect, useState} from 'react';
import { Icon } from '@iconify/react';

import {connect} from 'react-redux'
import {IMAGE_URL} from '../../configs/image.url';
import {getProduct} from '../../api/products.api';
import {addToCart} from '../../redux/Shopping/shopping-actions'
import {useDispatch, useSelector} from 'react-redux';
import { fetchProducts } from '../../redux/Shopping/shopping.thunk';
import {Link} from 'react-router-dom';
import http from '../../services/http.service'
import {useParams} from 'react-router';
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
    const dispatch = useDispatch();
    let {id} = useParams();
    
    

    async function sendComment(e) {

        e.preventDefault();
       

        let result = http.post('http://localhost:3002/comments', {
            username,
            comment,
            score,
            email,
            for: id}
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
 let proCategory = product.map(data => data.category)
 let proName = product.map(data => data.name)

console.log(proCategory)
useEffect(() => {
    dispatch(fetchProducts())
    getComments().then(data => setRows(data.data))
    getProduct(id).then(data => setProduct(data.data))
}, [])

const datas = rows;
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = datas.slice(indexOfFirstPost, indexOfLastPost)
const paginate = (pageNumber) => setCurrentPage(pageNumber)
function test() {
    console.log("sd")
};

return (

    <div className={Styles.container}>
        <Header/>
        <hr className={Styles.hrHeader}></hr>

        <div className={Styles.body}>
            {
                product.map(
                    data => <div>
                        <div className={Styles.levels}>
                            <Link className={Styles.Link} to="/">
                                <div >محصولات/</div>
                            </Link>
                            <Link className={Styles.Link} to={`/Products/${data.category}`}>
                                <div >{data.category}</div>
                            </Link>

                        </div>

                        <div className={Styles.productSec}>

                            <div className={Styles.information}>
                                <div className={Styles.images}>
                                    <img className={Styles.productIMG} src={`${IMAGE_URL}${data.image}`}></img>
                                    <div className={Styles.littles}>
                                        <img className={Styles.productLittleImg} src={`${IMAGE_URL}${data.image}`}></img>
                                        <img className={Styles.productLittleImg} src={`${IMAGE_URL}${data.image}`}></img>
                                        <img className={Styles.productLittleImg} src={`${IMAGE_URL}${data.image}`}></img>
                                    </div>

                                </div>
                                <div className={Styles.center}>

                                    <h1></h1>
                                    <div className={Styles.productInfo}>
                                        <p className={Styles.pName}>
                                            {data.name}
                                        </p>
                                        <p className={Styles.pBrand}>محصول: {data.brand}</p>
                                        <p className={Styles.info}>
                                            {data.info}
                                        </p>
                                    </div>

                                </div>

                            </div>

                            <BuyCard count={data.count} price={data.price} click={test}/>
                        </div>
                        
                    </div>
                    

                )
            }
        

        </div>
        <hr></hr>
        <div className={Styles.same} >
        <h1>کالا های مشابه</h1>
        
                <div className={Styles.headerCategory} >
                <h1></h1>
                <Link
                className={Styles.Link}
                to= {`/Products/${proCategory}`} >
                <div className={Styles.more} >
                   <p>نمایش محصولات بیشتر</p>
                   <Icon className={Styles.iconMore} icon="ic:outline-more" color="#ee2d40" width="25" height="30" />
               </div>
                </Link>
            
                
                
                </div>
                    <div className={Styles.biscSec}>
                        
                        {
                            productsNew?.filter(value=> value.category == proCategory).
                            slice(0, 5)
                            
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
                        <hr></hr>

      
        <div className={Styles.addComment}>
            <h2>نظر خودرا راجع به {proName} بنویسید</h2>
            <div className={Styles.commentSec}>
                <form onSubmit={sendComment}>
                    <div className={Styles.addCommentInputs}>
                    <div className={Styles.inputRight} >
                    <input
                        required="required"
                        onChange={(e) => setusername(e.target.value)}
                        className={Styles.input}
                        type='text'
                        placeholder='نام'></input>
                         <input
                        required="required"
                        onChange={(e) => setemail(e.target.value)}
                        className={Styles.input}
                        type='text'
                        placeholder='ایمیل'></input>
                    <input
                        required="required"
                        onChange={(e) => setscore(e.target.value)}
                        max="5"
                        className={Styles.inputScore}
                        type='number'
                        placeholder='امتیاز'></input>
                    </div>
                   <div className={Styles.inputLeft}>
                   <input
                        required="required"
                        onChange={(e) => setcomment(e.target.value)}
                        className={Styles.inputComment}
                        type='text'
                        placeholder='نظر'></input>
                <button id="submit" className={Styles.submitBtn}>ثبت نظر</button>
                   </div>
                   
                    </div>
                   
                   
                </form>
                
            </div>
            <h1 className={Styles.nazarat}>
            نظرات
        </h1>

        </div>
        {
            datas
                .filter(value => value.for == id)
                .length !== 0
                    ? <div>
                            {
                                currentPosts?.filter(value => value.for == id)
                                        .map(
                                            values => <Comments
                                                key={values.id}
                                                score={values.score}
                                                username={values.username}
                                                userComment={values.comment}
                                                like={likef}
                                                dislike={dislikef}
                                                likes={like}
                                                dislikes={dislike}/>
                                        )
                            }
                           
                        </div>

                    : <div className={Styles.noComment}>
                            <h1 className={Styles.noCommentH1}>کامنتی برای نمایش وجود ندارد</h1>
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
