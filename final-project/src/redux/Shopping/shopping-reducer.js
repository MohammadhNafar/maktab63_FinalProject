import * as actionTypes from './shopping-types';
import {getProducts} from '../../api/products.api'

const INITIAL_STATE = {

    products: [],
    cart: [],
    product: [],

    modal: null,
    loading: false,
    error: null

}

const shopReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state
                .products
                .data
                .find(data => data.id === action.payload.id );
           

            const inCart = state
                .cart
                .find(
                    (item) => item.id === action.payload.id
                        ? true
                        : false
                );


            return {
                ...state,
                cart: inCart
                    ? state
                        .cart
                        .map(
                            (item) => item.id === action.payload.id
                                ? {
                                    ...item,
                                        qty : item.count > item.qty ? item.qty + 1 : item.qty
                                           //qty : item.qty > item.count ? item.qty - item.count :  item.qty + 1      
                                             //  qty: item.qty + 1
                                }
                                : item
                        )
                    : [
                        ...state.cart, {
                            ...item,
                            qty: 1
                        }
                    ]
            };

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state
                    .cart
                    .filter(item => item.id !== action.payload.id)
            }
        case actionTypes.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state
                    .cart
                    .map(
                        item => item.id === action.payload.id
                            ? {
                                ...item,
                                qty: +action.payload.qty
                            
                                //qty:   +action.payload.qty
                                //qty: item.count > item.qty ? item.qty - item.qty :  +action.payload.qty
                            }
                            : item
                    )
            }

        case actionTypes.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }

        case actionTypes.FETCH_PRODUCTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case actionTypes.FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case actionTypes.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload
            }

        case actionTypes.FETCH_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                modal: action.payload
            }



        default:
            return state
    }

};

export default shopReducer;