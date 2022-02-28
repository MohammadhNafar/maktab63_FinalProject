import {getProductsRequest , getProductsSuccess , getProductsFailed} from './shopping-actions';
import axios from 'axios';


const url = "http://localhost:3002/prod2ucts";

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(getProductsRequest())
        axios.get(url).then(data => {
            dispatch(getProductsSuccess(data))
        }).catch(err => {
            dispatch(getProductsFailed(err.message))
        })
            
            
    }
}