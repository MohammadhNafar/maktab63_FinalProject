import { combineReducers } from 'redux';
import shopReducer from './Shopping/shopping-reducer';
import ordersReducer from './Orders/orders-reducers';
import {renderStatusReducer} from './reRender/reRender.status.reducer'
const rootReducer = combineReducers({
    shop: shopReducer,
    orders: ordersReducer,
    renderStatus : renderStatusReducer
});


export default rootReducer;