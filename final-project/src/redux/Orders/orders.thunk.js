
import http from "../../services/http.service";
import {getOrdersRequest , getOrdersSuccess , getOrdersFailed} from './orders-actions';
import BASE_URL from "../../configs/variable.config";
const url = BASE_URL;

const reqConfig = {
    headers: {
        'content-type': 'application/json',
        'token': localStorage.getItem('ACCESS_TOKEN')
    }
}


export const fetchOrders = () => {
    return (dispatch) => {
        dispatch(getOrdersRequest())
        http.get(`${url}/orders`,reqConfig).then(data => {
            dispatch(getOrdersSuccess(data))
        }).catch(err => {
            dispatch(getOrdersFailed(err.message))
        })
            
            
    }
}


// export async function getOrders(config){
//     try {
//         const response = await http.get("/orders",config);
//         return response;
//     } catch(e){
//         return Promise.reject(e);
//     }




// }