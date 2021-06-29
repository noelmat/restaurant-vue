import service from './configureAxios';


export const getCart = ()=>{
    return service().get(
        `/cart/`,
        {
            withCredentials: true
        }
    );
}
export const addToCart = (cartId,item)=>{
    return service().patch(
        `/cart/${cartId}?action=add_to_cart`,
        {
            ...item
        }
    );
}
export const removeFromCart = (cartId,item)=>{
    return service().patch(
        `/cart/${cartId}?action=remove_from_cart`,
        {
            ...item
        },

    );
}
