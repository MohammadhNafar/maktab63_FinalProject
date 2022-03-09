import {getProductsRequest , getProductsSuccess , getProductsFailed} from './shopping-actions';
import {getProductRequest , getProductSuccess , getProductFailed} from './shopping-actions';
import axios from 'axios';
import http from '../../services/http.service';
import BASE_URL from '../../configs/variable.config';
const url = BASE_URL;

export const fetchProducts = () => {
    return (dispatch) => {
      
        dispatch(getProductsRequest())

        axios.get(`${url}/products`).then(data => {
            dispatch(getProductsSuccess(data))
            console.log("redux datas", data)
        }).catch(err => {
            dispatch(getProductsFailed(err.message))
        })   
    }
}
