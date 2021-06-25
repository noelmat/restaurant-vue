import Router from 'vue-router';

import AdminDashboard from '@/components/AdminDashboard/AdminDashboard';
import RestaurantManagement from '@/components/AdminDashboard/RestaurantManagement/RestaurantManagement';
import UserManagement from '@/components/AdminDashboard/UserManagement/UserManagement';
import MenuView from '@/components/AdminDashboard/RestaurantManagement/MenuView/MenuView';
import RestaurantLogin from '@/components/RestaurantLogin/RestaurantLogin';
import CustomerLogin from '@/components/CustomerLogin/CustomerLogin';
import HomePage from '@/components/CustomerView/HomePage';
import Cart from '@/components/CustomerView/Cart';

import Vue from 'vue';

Vue.component('AdminDashboard', AdminDashboard);
Vue.component('RestaurantManagement', RestaurantManagement);
Vue.component('UserManagement', UserManagement);
Vue.component('MenuView', MenuView);
Vue.component('RestaurantLogin', RestaurantLogin);
Vue.component('CustomerLogin', CustomerLogin);
Vue.component('HomePage', HomePage);
Vue.component('Cart', Cart);

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
        {
            name: 'customer-login',
            path: '/login',
            component: CustomerLogin
        },
        {
            name: 'home',
            path: '/',
            component: HomePage
        },
        {
            name: 'cart',
            path: '/cart',
            component: Cart
        }
        // {
        //     name: 'pagenotfound',
        //     path: '*',
        //     component: RestaurantManagement
        // }
    ]
})


export default router;