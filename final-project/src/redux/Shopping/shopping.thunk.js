import {getProductsRequest , getProductsSuccess , getProductsFailed} from './shopping-actions';
import {getProductRequest , getProductSuccess , getProductFailed} from './shopping-actions';
import axios from 'axios';
import http from '../../services/http.service';

const url = "http://localhost:3002/products";

export const fetchProducts = () => {
    return (dispatch) => {
      
        dispatch(getProductsRequest())

        axios.get(url).then(data => {
            dispatch(getProductsSuccess(data))
            console.log("redux datas", data)
        }).catch(err => {
            dispatch(getProductsFailed(err.message))
        })   
    }
}
export async function fetchProduct(id){
    return (dispatch) => {
        dispatch(getProductRequest())
        axios.get(`http://localhost:3002/products?id=${id}`).then(data => {
            dispatch(getProductSuccess(data))
        }).catch(err => {
            dispatch(getProductFailed(err.message))
        })
    }
}
