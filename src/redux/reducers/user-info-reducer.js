import {UPPDATE_USERINFO} from '../actions/user-action'
let userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
export default  function(state=userInfo, action) {
    switch(action.type) {
    case UPPDATE_USERINFO: {
        return {
            ...state,
            ...action.info
        }
    }
    default:
        return state;

    }
}
