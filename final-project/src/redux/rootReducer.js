import { combineReducers } from 'redux';
import shopReducer from './Shopping/shopping-reducer';
import ordersReducer from './Orders/orders-reducers';
const rootReducer = combineReducers({
    shop: shopReducer,
    orders: ordersReducer
});


export default rootReducer;