import Vue from 'vue';

const orders = {
    state: {
        listener : {},
        orders: {}
    },
    getters:{
        orders(state){
            return state.orders;
        }
    },
    mutations: {
        setListener(state, payload){
            state.listener = payload.listener
        },
        setOrder(state, payload){
            if(payload.order.status !== 'completed'){
                return Vue.set(state.orders,payload.order._id,payload.order)
            }
            Vue.delete(state.orders,payload.order._id)
        },
        setOrders(state, payload){
            payload.order.forEach(order => {
                Vue.set(state.orders,order._id,order)
            });
            
        }
    },
    actions: {
        track_orders(context, payload){
            context.commit({
                type: 'setListener',
                listener : payload.listener
            })
        },
        order_updated(context, payload){
            if(payload.order.length === undefined){
                context.commit({
                    type: 'setOrder',
                    order: payload.order
                })
            }else{
                context.commit({
                    type: 'setOrders',
                    order: payload.order
                })
            }
            
        },
        stop_tracking(context){
            if(context.state.listener){
                context.state.listener.close();
            }
        }
    }
}

export default orders;