import Vuex from 'vuex';
import authentication from './modules/authentication';
import customerAuth from './modules/customer-auth';
import Vue from 'vue';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        authentication,
        customerAuth
    }
})

export default store;