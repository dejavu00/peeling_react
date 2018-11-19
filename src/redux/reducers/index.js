import { combineReducers } from 'redux';
import cartReducer from './cart-reducer'
import userinfos from './user-info-reducer'

const allReducers = {
    userInfo: userinfos,
    shoppingCart: cartReducer
};

const rootReducer = combineReducers(allReducers);
export default rootReducer