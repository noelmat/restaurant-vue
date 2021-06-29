import axios from 'axios';
import store from '../../store';

export default ({requiresAuth = false} = {}) => {
    const options = {};
    options.baseURL = process.env.VUE_APP_API_BASE_URL;
    options.headers = {};
    if(requiresAuth){
        if(store.state.authentication !== undefined)
        options.headers.Authorization = store.state.authentication.token
    }
    const instance = axios.create(options);
    instance.interceptors.response.use( res => res.data, error => Promise.reject(error));

    return instance;
}

