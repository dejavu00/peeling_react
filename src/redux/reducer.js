import { createStore } from 'redux';
import { combineReducers } from 'redux';
export const ADD_TO_CART = 'ADD_TO_CART';
export function addToCart(product, quantity, unitCost) {
    return {
        type: ADD_TO_CART,
        payload: { product, quantity, unitCost }
    }
}

const initialState = {
    cart: [
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        }
    ]
}

const productsReducer = function(state=[], action) {
    return state;
}

const allReducers = {
    products: productsReducer
}

const rootReducer = combineReducers(allReducers)

let store = createStore(rootReducer)

let unsubscribe = store.subscribe(() =>
    console.log('执行完毕')
);
