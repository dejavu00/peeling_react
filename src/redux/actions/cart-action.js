export const ADD_TO_CART = 'ADD_TO_CART';
export const addToCart = function (product, quantity, unitCost) {
    return {
        type: ADD_TO_CART,
        payload: { product, quantity, unitCost }
    }
};
