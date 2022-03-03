
import http from "../../services/http.service";
import {getOrdersRequest , getOrdersSuccess , getOrdersFailed} from './orders-actions';
const url = "http://localhost:3002/orders";

const reqConfig = {
    headers: {
        'content-type': 'application/json',
        'token': localStorage.getItem('ACCESS_TOKEN')
    }
}


export const fetchOrders = () => {
    return (dispatch) => {
        dispatch(getOrdersRequest())
        http.get(url,reqConfig).then(data => {
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