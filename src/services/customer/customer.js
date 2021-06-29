import service from './configureAxios';

export const getCustomerDetails = ()=>{
    return service({requiresAuth:true}).get(
        `/customer/`,
    )
}