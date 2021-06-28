import {getSession} from '@/services/customer/session';
import {addToCart, getCart, removeFromCart} from '@/services/customer/cart.js';

const KEY_CARTID = 'cartId';


const cart = {
    state: {
        cartId : localStorage.getItem(KEY_CARTID) || '',
        cartItem: {},
        cart: {},
    }, 
    getters: {
        cart(state){
            return state.cart;
        },
        cartLength(state){
            // let qty = 0;
            if(state.cart.items !== undefined){
                return state.cart.items.reduce((total, item)=>{
                    return total + item.quantity
                }, 0);
            }
            return '';
        }
    },
    mutations: {
        setCartId(state, payload){
            state.cartId = payload.cartId;
        },
        setCartItem(state, payload){
            state.cartItem[payload.key] = payload.value;
        },
        setCart(state, payload){
            state.cart = payload.cart;
        },
        resetCartItem(state, payload){
            state.cartItem = payload.cartItem;
        }
    },
    actions: {
        loadSession(context){
            return getSession()
                .then(()=> {
                    return getCart()
                })
                .then(cart => {
                    context.commit({
                        type: 'resetCartItem',
                        cartItem: {}
                    })
                    

                    cart.items.forEach(item => {
                        context.commit({
                            type: 'setCartItem',
                            key: item.item._id,
                            value: item._id
                            })
                    })
                    context.commit({
                        type: 'setCart',
                        cart
                    })
                    context.commit({
                        type: 'setCartId',
                        'cartId': cart._id
                    })

                    localStorage.setItem(KEY_CARTID, cart._id);
                    return Promise.resolve();
                }).catch(error => {
                    return Promise.reject(error)
                });
        },
        addToCart(context, payload){
            const item = payload.item;
            let _id;
            if(payload.item._id === undefined){
                 _id = context.state.cartItem[item.item];
            }
            if(_id!== undefined){
                item._id = _id;
            }
            if(payload.quantity + item.quantity <= 0){
                removeFromCart(context.state.cartId, item)
                    .then(cart => {
                        context.commit({
                            type: 'setCart',
                            cart
                        })
                    })
            }
            else{
                addToCart(context.state.cartId,item)
                .then(({cart, cartItem})=>{
                    context.commit({
                        type: 'setCartItem',
                        key: item.item,
                        value: cartItem._id
                    })

                    context.commit({
                        type: 'setCart',
                        cart
                    })
                })
            }
            
        }
    }
}

export default cart;