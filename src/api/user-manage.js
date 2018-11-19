import axios from 'axios';
const domain = 'http://localhost:5000';

export const   queryMenuTree =()=>{
    return axios.get(domain+'/permission/queryMenuTree')
};

export const   getUser =()=>{
    const access_token = sessionStorage.getItem('access-token');
    return axios.get(domain+'/user/query',{
        headers: {
            'access-token': access_token
        }
    })
};
