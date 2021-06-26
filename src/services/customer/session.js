import axios from 'axios';

export const getSession = () => {
    return axios.get(
        "http://localhost:3000/auth/customer/session",
        {withCredentials:true}
    )
    .then(res => res.data);
}