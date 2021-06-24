import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import VueScrollTo from 'vue-scrollto'

Vue.use(Router);
Vue.use(Vuex);
Vue.use(VueScrollTo);


import "normalize.css/normalize.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@/css/app.css";
import "@/css/utils.css";


import AddButton from '@/components/GlobalComponents/AddButton/AddButton';
import ConfirmBox from '@/components/GlobalComponents/ConfirmBox/ConfirmBox';
import ModalComponent from '@/components/GlobalComponents/ModalComponent/ModalComponent';


Vue.component('AddButton',AddButton);
Vue.component('ConfirmBox',ConfirmBox);
Vue.component('ModalComponent',ModalComponent);