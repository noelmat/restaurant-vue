import service from './configureAxios';

export const placeOrder = (order)=>{
    return service({requiresAuth: true}).post(
        `/oms/`,
        order,
        {
            withCredentials: true
        }
    )
}