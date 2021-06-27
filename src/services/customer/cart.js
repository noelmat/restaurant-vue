import axios from 'axios';


export const getCart = ()=>{
    return axios.get(
        `http://localhost:3000/cart/`,
        {
            withCredentials: true
        }
    ).then(res => res.data);
}
export const addToCart = (cartId,item)=>{
    return axios.patch(
        `http://localhost:3000/cart/${cartId}?action=add_to_cart`,
        {
            ...item
        }
    ).then(res => res.data);
}
export const removeFromCart = (cartId,item)=>{
    return axios.patch(
        `http://localhost:3000/cart/${cartId}?action=remove_from_cart`,
        {
            ...item
        },

    ).then(res => res.data);
}
