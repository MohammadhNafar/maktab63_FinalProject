
import * as actionTypes from './orders-types';



 export const getOrdersRequest = () => {
    return {
        type: actionTypes.FETCH_ORDERS_REQUEST,
    }
};


export const getOrdersSuccess = (data) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        payload: data
    }
};

export const getOrdersFailed = (err) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAILED,
        payload: err
    }
};