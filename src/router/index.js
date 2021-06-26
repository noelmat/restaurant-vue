import Router from 'vue-router';
import store from '@/store';

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

const meta = {
    authorize : []
};

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'admin',
            path: '/admin/dashboard',
            component: AdminDashboard,
            meta,
            children: [
                {
                    name: 'dashboard-home',
                    path:'',
                    meta
                },
                {
                    name: 'dashboard-users',
                    path: 'users',
                    meta,
                    component: UserManagement
                },
                {
                    name: 'dashboard-menus',
                    path: 'menus',
                    meta,
                    component: RestaurantManagement,
                },
                {
                    name: 'dashboard-menu-detail',
                    path: 'menus/:menuId',
                    meta,
                    component: MenuView
                }
            ]
			

        },
        {
            name: 'admin-login',
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
    ]
})
router.beforeEach((to, from, next) =>{
    if(to.meta.authorize && !store.getters.isAuthenticated){
        next({
            name: 'admin-login',
        });
    }else{
        // if(['login', 'register'].indexOf(to.name) !== -1 && store.getters.isAuthenticated){
        //     next({ name: 'dashboard-home'})
        // }
        // else{
            next()
        // }
        
    }
})

export default router;