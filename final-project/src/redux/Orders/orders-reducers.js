import * as actionTypes from './orders-types';

const INITIAL_STATE = {
    orders :[] ,
    modal : null
}



const ordersReducer  = (state = INITIAL_STATE, action) => {

    switch(action.type){

                    case actionTypes.FETCH_ORDERS_REQUEST:
                        return { ...state, loading: true }

            case actionTypes.FETCH_ORDERS_SUCCESS:
            return { ...state, loading: false, orders: action.payload }

            case actionTypes.FETCH_ORDERS_FAILED:
            return { ...state, loading: false, error: action.payload }
            case actionTypes.LOAD_CURRENT_ITEM:
                return {
                    ...state,
                    modal: action.payload,
                };












            
                default:
                    return state




    }


}


export default ordersReducer;