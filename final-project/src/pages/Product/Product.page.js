import React from 'react';
import Header from '../../layouts/user/header/Header';
import Styles from './Product.module.css';
import BuyCard from './Components/buyCard/BuyCard.component';
import {getComments} from '../../api/comments.api';
import {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {addToCart} from '../../redux/Shopping/shopping-actions'
import http from '../../services/http.service'

import Comments from './Components/Coments/Comments.component';
import IMG from '../../assets/images/productsImage/kisspng-cream-chocolate-spread-nutella-white-chocolate-nutella-crepe-5b1a06b75d0bc6.8532377415284323113811.png';
import axios from 'axios';
const ProductPage = ({current,addToCart}) => {

    const [like,setlike] = useState(0)
    const [dislike,setdislike] = useState(0)
    
    const [likeactive,setlikeactive] = useState(false)
    const [dislikeactive,setdislikeactive] = useState(false)
    const [username,setusername] = useState([]);
    const [comment,setcomment] = useState([]);
    const [score,setscore] = useState([]);



    async function sendComment(e)
    {
      e.preventDefault();
      console.log(username,comment,score)
      let items = {username,comment,score};
      let result = http.post('http://localhost:3002/products' , {
        username,
        comment,
        score
    
      })
      result = await result.json();
    }

  
    function likef(){
      if(likeactive){
        setlikeactive(false)
        setlike(like-1)
      }else{
        setlikeactive(true)
        setlike(like+1)
        if(dislikeactive){
          setdislikeactive(false)
          setlike(like+1)
          setdislike(dislike-1)
        }
      }
    }
    
    function dislikef(){
      if(dislikeactive){
        setdislikeactive(false)
        setdislike(dislike-1)
      }else{
        setdislikeactive(true)
        setdislike(dislike+1)
        if(likeactive){
          setlikeactive(false)
          setdislike(dislike+1)
          setlike(like-1)
        }
      }
    }





    const  [rows, setRows] = useState([]);
    useEffect(() => {
        getComments().then(data => setRows(data.data) )
        console.log(rows,'hello')
        //localStorage.setItem('loggedin', 'false')

      }, [])
      const datas = rows;
    return (

        <div className={Styles.container}>
            <Header/>
            <hr className={Styles.hrHeader}></hr>

            <div className={Styles.body}>
            <div className={Styles.levels} >محصولات/شکلات</div>

            <div className={Styles.productSec}>

                <div className={Styles.information} >
                    <div className={Styles.images}>
                <img className={Styles.productIMG} src={IMG}></img>
                <div className={Styles.littles}>
                <img className={Styles.productLittleImg} src={IMG}></img>
                <img className={Styles.productLittleImg} src={IMG}></img>
                <img className={Styles.productLittleImg} src={IMG}></img>
                </div>
                
                </div>
                <div className={Styles.center}>

                <h1>
                        {current.Name}
                    </h1>
                    <div className={Styles.productInfo}>
                    <p>
                        {current.info}
                    </p>
                    </div>
                    
                    <div className={Styles.centerQuantitySec}>

                    <input className={Styles.quantityInput} type='number' ></input>  تعداد 

                    </div>
                </div>
                   

                </div>
               
                <BuyCard
                price = {current.Price}
                />
            </div>

            </div>
            <hr></hr>
            <h1 className={Styles.nazarat}>
                نظرات
            </h1>

            <div className={Styles.addComment}>
              <h2>نظر خودرا بنویسید</h2> 
              <div className={Styles.commentSec}>
              <form>
                <input onChange={(e) => setusername(e.target.value)}
                 className={Styles.input} type='text' placeholder='نام'></input>
                <input onChange={(e) => setscore(e.target.value)}
                 className={Styles.inputScore} type='number' placeholder='نمره'></input>
                <input onChange={(e) => setcomment(e.target.value)}
                 className={Styles.inputComment} type='text' placeholder='نظر'></input>
                <button onClick={sendComment} className={Styles.submitBtn} >ثبت نظر</button>
              </form>
      </div>
            </div>
{
    datas.map(
        data =>
        <Comments
        key = {data.id}
        score = {data.score}
        username = {data.username}
        userComment = {data.comment}
        like = {likef}
        dislike = {dislikef}
        likes = {like}
        dislikes = {dislike}
        />

    )
}
        

        </div>
    );
}
const mapStateToProps = state => {
  return {
    current: state.shop.currentItem
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);

