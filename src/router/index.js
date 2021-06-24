import Router from 'vue-router';

import AdminDashboard from '@/components/AdminDashboard/AdminDashboard';
import RestaurantManagement from '@/components/AdminDashboard/RestaurantManagement/RestaurantManagement';
import UserManagement from '@/components/AdminDashboard/UserManagement/UserManagement';
import MenuView from '@/components/AdminDashboard/RestaurantManagement/MenuView/MenuView';
import RestaurantLogin from '@/components/RestaurantLogin/RestaurantLogin';

import Vue from 'vue';

Vue.component('AdminDashboard', AdminDashboard);
Vue.component('RestaurantManagement', RestaurantManagement);
Vue.component('RestaurantLogin', RestaurantLogin);
const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'admin',
            path: '/admin/dashboard',
            component: AdminDashboard,
            children: [
                {
                    name: 'dashboard-home',
                    path:'',

                },
                {
                    name: 'dashboard-users',
                    path: 'users',
                    component: UserManagement
                },
                {
                    name: 'dashboard-menus',
                    path: 'menus',
                    component: RestaurantManagement,
                },
                {
                    name: 'dashboard-menu-detail',
                    path: 'menus/:menuId',
                    component: MenuView
                }
            ]
			

        },
        {
            name: 'restaurant-login',
            path: '/admin/login',
            component: RestaurantLogin
        },
        // {
        //     name: 'home',
        //     path: '/',
        //     component: HomePage
        // },
        // {
        //     name: 'pagenotfound',
        //     path: '*',
        //     component: RestaurantManagement
        // }
    ]
})


export default router;