import Vuex from 'vuex';
import authentication from './modules/authentication';
import Vue from 'vue';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        authentication
    }
})

export default store;