import * as actionTypes from './shopping-types';

export const addToCart = (itemID) => {
   
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
            
        },
    }
}

export const removeFromCart = (itemID) =>
{
    

    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID,
        },
    }
}

export const adjustItemQty = (itemID, qty) => {
    return {
      type: actionTypes.ADJUST_ITEM_QTY,
      payload: {
        id: itemID,
        qty,
      },
    };
  };

  export const getProductsRequest = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_REQUEST,
    }
};


export const getProductsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: data
    }
};

export const getProductsFailed = (err) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAILED,
        payload: err
    }
};


export const getProductRequest = () => {
    return {
        type: actionTypes.FETCH_PRODUCT_REQUEST,
    }
};


export const getProductSuccess = (data) => {
    return {
        type: actionTypes.FETCH_PRODUCT_SUCCESS,
        payload: data
    }
};

export const getProductFailed = (err) => {
    return {
        type: actionTypes.FETCH_PRODUCT_FAILED,
        payload: err
    }
};










export const loadCurrentItem = (item) => {
    return {
      type: actionTypes.LOAD_CURRENT_ITEM,
      payload: item,
    };
}