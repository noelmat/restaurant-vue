import service from './configureAxios';

export const updateOrderStatus = (orderId, status)=>{
    return service({requiresAuth:true}).patch(
        `/oms/${orderId}?action=change_status&status=${status}`
    )
}