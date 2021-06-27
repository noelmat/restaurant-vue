import axios from 'axios';

export const getRestaurant = ()=>{
    return axios.get(
        `http://localhost:3000/restaurant`
    ).then(res => res.data);
}
