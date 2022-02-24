import * as actionTypes from './shopping-types';
import {getProducts} from '../../api/products.api'

const INITIAL_STATE = {
    products: [{
        "name": "لواشک ورقه ایی",
        "brand": "biscuit",
        "image": "44cbd5d418c390f16bd227ef21f85a96",
        "price": "1000",
        "count": "200",
        "createdAt": 1644702354045,
        "category": "لواشک",
        "id": 7
      },
      {
        "name": "شکلات اسنیکرس",
        "brand": "biscuit",
        "image": "f37502c2d72e2c9f4c6c3c52386133e5",
        "price": "35000",
        "count": "20",
        "createdAt": 1644702424058,
        "category": "شکلات",
        "id": 8
      },
      {
        "name": "شکلات نوتلا",
        "brand": "nutella",
        "image": "f38d2fab178b39d714435f15f5914b46",
        "price": "200000",
        "count": "15",
        "createdAt": 1644702615019,
        "category": "شکلات",
        "id": 9
      },
      {
        "name": "بسکوییت اورعو",
        "brand": "oreo",
        "image": "9afe66acf4babc82680e266ad166f2f6",
        "price": "200000",
        "count": "20",
        "createdAt": 1644702791659,
        "category": "بیسکوییت",
        "id": 10
      },
      {
        "name": "کوکی",
        "brand": "cookie",
        "image": "a86906938a2014dc8c0eaf935920eade",
        "price": "20000",
        "count": "230",
        "createdAt": 1644703500375,
        "category": "بیسکوییت",
        "id": 11
      },
      {
        "name": "هات چاکلت",
        "brand": "drinks",
        "image": "c288f1701ecd0e2668bdae1ba9d1b2ed",
        "price": "15000",
        "count": "23",
        "createdAt": 1644703648226,
        "category": "نوشیدنی",
        "id": 12
      },
      {
        "name": "شکلات تلخ کاراملی",
        "brand": "darkChoco",
        "image": "6a1a2367e3af705a2441bed7e2ad81e3",
        "price": "15000",
        "count": "23",
        "createdAt": 1644705060885,
        "category": "شکلات",
        "id": 13
      }
      ,
      {
        "name": "شکلات تلخ کاراملی",
        "brand": "darkChoco",
        "image": "6a1a2367e3af705a2441bed7e2ad81e3",
        "price": "15000",
        "count": "0",
        "createdAt": 1644705060885,
        "category": "شکلات",
        "id": 13
      }],
    cart: [],
    currentItem : [
      {
        "Name": "لواشک ورقه ایی",
      }
    ],
}


const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(data =>data.id === action.payload.id);

           const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };




            case actionTypes.REMOVE_FROM_CART:
                return {
                    ...state,
                    cart: state.cart.filter(item=> item.id !==action.payload.id),
                }
                case actionTypes.ADJUST_ITEM_QTY:
                    return {
                        ...state,
                        cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty}: item)
                    }
                    case actionTypes.LOAD_CURRENT_ITEM:
                        return {
                            ...state,
                            currentItem: action.payload,
                           
                           
                        }
                        default:
                            return state
    }
 

};

export default shopReducer;