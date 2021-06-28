import store from '@/store';

export const activeOrders = ()=>{
    let url = process.env.$BASE_URL || 'http://localhost:3000/';
    url += 'oms/active';
    const sse = new EventSource(url);
    sse.onmessage = (event)=>{
        const parsed = JSON.parse(event.data);
        store.dispatch({
            type: "order_updated",
            order : parsed
        })
    };
    store.dispatch({
        type: 'track_orders',
        listener: sse
    })
}