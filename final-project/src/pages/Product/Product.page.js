import React from 'react';
import Header from '../../layouts/user/header/Header';
import Styles from './Product.module.css';
import BuyCard from './Components/buyCard/BuyCard.component';
import {getComments} from '../../api/comments.api';
import {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {IMAGE_URL} from '../../configs/image.url';
import {getProduct} from '../../api/products.api';
import {addToCart} from '../../redux/Shopping/shopping-actions'
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import http from '../../services/http.service'
import {useParams} from 'react-router';
import Pagination from '../../Components/pagination/pagination.component';
import Comments from './Components/Coments/Comments.component';
const ProductPage = (props) => {

    const [like, setlike] = useState(0)
    const [dislike, setdislike] = useState(0)
    const [likeactive, setlikeactive] = useState(false)
    const [dislikeactive, setdislikeactive] = useState(false)
    const [username, setusername] = useState([]);
    const [comment, setcomment] = useState([]);
    const [score, setscore] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const dispatch = useDispatch();
    let {id} = useParams();
    console.log(id)

    async function sendComment(e) {

        e.preventDefault();
        console.log(username, comment, score)

        let result = http.post('http://localhost:3002/comments', {
            username,
            comment,
            score,
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

useEffect(() => {
    getComments().then(data => setRows(data.data))
    console.log(rows, 'hello')
    getProduct(id).then(data => setProduct(data.data))
    // http.get("http://localhost:3002/products").then(data =>
    // setProduct(data.data))
    console.log(product, "sdsd");

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
        <h1 className={Styles.nazarat}>
            نظرات
        </h1>

        <div className={Styles.addComment}>
            <h2>نظر خودرا بنویسید</h2>
            <div className={Styles.commentSec}>
                <form onSubmit={sendComment}>
                    <input
                        required="required"
                        onChange={(e) => setusername(e.target.value)}
                        className={Styles.input}
                        type='text'
                        placeholder='نام'></input>
                    <input
                        required="required"
                        onChange={(e) => setscore(e.target.value)}
                        max="5"
                        className={Styles.inputScore}
                        type='number'
                        placeholder='نمره'></input>
                    <input
                        required="required"
                        onChange={(e) => setcomment(e.target.value)}
                        className={Styles.inputComment}
                        type='text'
                        placeholder='نظر'></input>
                    <button id="submit" className={Styles.submitBtn}>ثبت نظر</button>
                </form>
            </div>
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
                            <div className={Styles.pageNums}>

                                <Pagination
                                    postsPerPage={postsPerPage}
                                    totalPosts={datas.length}
                                    paginate={paginate}/>

                            </div>
                        </div>

                    : <div className={Styles.noComment}>
                            <h1 className={Styles.noCommentH1}>کامنتی برای نمایش وجود ندارد</h1>
                        </div>
        }

    </div>
);
}

const mapDispatchToProps = dispatch => {
return {
    addToCart: (id) => dispatch(addToCart(id))
}
}

export default connect(mapDispatchToProps)(ProductPage);
