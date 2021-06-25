import axios from 'axios';

export const register = (credentials) => {
    return axios.post(
        'http://localhost:3000/auth/customer/register',
        {
            ...credentials
        }).then(res => res.data);
}

export const login = (credentials) => {
    return axios.post(
        'http://localhost:3000/auth/customer/login',
        {
            ...credentials
        }).then(res => res.data);
}