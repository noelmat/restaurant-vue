import Router from 'vue-router';

import AdminDashboard from '@/components/AdminDashboard/AdminDashboard';

import Vue from 'vue';

Vue.component('AdminDashboard', AdminDashboard);
const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'admin',
            path: '/admin/dashboard',
            component: AdminDashboard,
            
        },

    ]
})


export default router;