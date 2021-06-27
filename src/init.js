import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import VueScrollTo from 'vue-scrollto'
import Toast, {POSITION} from 'vue-toastification';

Vue.use(Router);
Vue.use(Vuex);
Vue.use(VueScrollTo);
Vue.use(Toast, {
    position: POSITION.TOP_RIGHT,
    timeout: 2000
});

import "normalize.css/normalize.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@/css/app.css";
import "@/css/utils.css";
import "vue-toastification/dist/index.css";



import AddButton from '@/components/GlobalComponents/AddButton/AddButton';
import ConfirmBox from '@/components/GlobalComponents/ConfirmBox/ConfirmBox';
import ModalComponent from '@/components/GlobalComponents/ModalComponent/ModalComponent';


Vue.component('AddButton',AddButton);
Vue.component('ConfirmBox',ConfirmBox);
Vue.component('ModalComponent',ModalComponent);