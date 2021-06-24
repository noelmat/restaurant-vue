import axios from 'axios';

export const login = (credentials) => {
    return axios.post(
        'http://localhost:3000/auth/usermanagement/login',
        {
            ...credentials
        }).then(res => res.data);
}