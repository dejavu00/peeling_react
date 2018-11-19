export const UPPDATE_USERINFO = 'UPPDATE_USERINFO';
export const updateUserInfo = function (info) {
    return {
        type: 'UPPDATE_USERINFO',
        info
    }
};