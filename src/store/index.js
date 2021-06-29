import Vuex from 'vuex';
import authentication from './modules/authentication';
import customerAuth from './modules/customer-auth';
import orders from './modules/orders';
import cart from './modules/cart';
import Vue from 'vue';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        authentication,
        customerAuth,
        cart,
        orders
    }
})

export default store;