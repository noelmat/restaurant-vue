import Router from 'vue-router';
import store from '@/store';

import AdminDashboard from '@/components/AdminDashboard/AdminDashboard';
import RestaurantManagement from '@/components/AdminDashboard/RestaurantManagement/RestaurantManagement';
import OrderManagement from '@/components/AdminDashboard/OrderManagement/OrderManagement';
import UserManagement from '@/components/AdminDashboard/UserManagement/UserManagement';
import MenuView from '@/components/AdminDashboard/RestaurantManagement/MenuView/MenuView';
import RestaurantLogin from '@/components/RestaurantLogin/RestaurantLogin';
import CustomerLogin from '@/components/CustomerLogin/CustomerLogin';
import CustomerRegistration from '@/components/CustomerLogin/CustomerRegistration';
import HomePage from '@/components/CustomerView/HomePage';
import Cart from '@/components/CustomerView/Cart';
import CustomerDashboard from '@/components/CustomerDashboard/CustomerDashboard';
import CustomerHome from '@/components/CustomerDashboard/CustomerHome/CustomerHome';
import CustomerOrders from '@/components/CustomerDashboard/CustomerOrders/CustomerOrders';
import OrderPage from '@/components/CustomerView/OrderPage';
import PageNotFound from '@/components/PageNotFound';

import Vue from 'vue';

Vue.component('AdminDashboard', AdminDashboard);
Vue.component('RestaurantManagement', RestaurantManagement);
Vue.component('OrderManagement', OrderManagement);
Vue.component('UserManagement', UserManagement);
Vue.component('MenuView', MenuView);
Vue.component('RestaurantLogin', RestaurantLogin);
Vue.component('CustomerLogin', CustomerLogin);
Vue.component('CustomerRegistration', CustomerRegistration);
Vue.component('HomePage', HomePage);
Vue.component('Cart', Cart);
Vue.component('CustomerDashboard', CustomerDashboard);
Vue.component('CustomerHome', CustomerHome);
Vue.component('CustomerOrders', CustomerOrders);
Vue.component('OrderPage', OrderPage);
Vue.component('PageNotFound', PageNotFound);

const adminMeta = {
    requiresAdminAuth : true, requiresCustAuth : false
};
const custMeta = {
    requiresAdminAuth : false, requiresCustAuth : true
};

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'admin',
            path: '/admin/dashboard',
            component: AdminDashboard,
            meta: adminMeta,
            children: [
                {
                    name: 'dashboard-home',
                    path:'',
                    meta: adminMeta,
                },
                {
                    name: 'dashboard-orders',
                    path: 'orders',
                    meta: adminMeta,
                    component: OrderManagement,
                },
                {
                    name: 'dashboard-users',
                    path: 'users',
                    meta: adminMeta,
                    component: UserManagement
                },
                {
                    name: 'dashboard-menus',
                    path: 'menus',
                    meta: adminMeta,
                    component: RestaurantManagement,
                },
                {
                    name: 'dashboard-menu-detail',
                    path: 'menus/:menuId',
                    meta: adminMeta,
                    component: MenuView
                },
               
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
            name: 'customer-registration',
            path: '/register',
            component: CustomerRegistration
        },
        {
            name: 'home',
            path: '/',
            component: HomePage
        },
        {
            name: 'customer-login-checkout',
            path: '/login/:cart',
            component: CustomerLogin
        },
        {
            name: 'customer-registration-checkout',
            path: '/register/:cart',
            component: CustomerRegistration
        },
        {
            name: 'cart',
            path: '/cart',
            component: Cart
        },
        {
            name: 'order',
            path: '/order/:cart',
            component: OrderPage,
            meta: custMeta
        },
        {
            name: 'customer-dashboard',
            path: '/customer/dashboard',
            meta: custMeta,
            component: CustomerDashboard,
            children: [
                {
                    name: 'customer-home',
                    path: '',
                    meta: custMeta,
                    component: CustomerHome
                },
                {
                    name: 'customer-orders',
                    path: 'orders',
                    meta: custMeta,
                    component: CustomerOrders
                }
            ]
        },
        {
            name: 'page-not-found',
            path: '*',
            component: PageNotFound
        }
    ]
})
router.beforeEach((to, from, next) =>{
    if(to.meta.requiresAdminAuth && !store.getters.isAuthenticated){
        next({
            name: 'admin-login',
        });
    }else if(to.meta.requiresCustAuth && !store.getters.isCustomerLoggedIn){
        if(to.name === 'order'){
            next({
                name: 'customer-login-checkout',
                params: {
                    ...to.params,
                },
                query: {
                    checkout: true
                }
            })
    
        }else{
            next({
                name: 'customer-login',
                params: to.params
            })
        }
        
    }
    else{
        if(to.name === 'customer-login' && store.getters.isCustomerLoggedIn){
            next({name: 'customer-home', params: to.params, query: to.query})
        }
        else if(to.name === 'admin-login' && store.getters.isAuthenticated){
            next({name: 'admin', params: to.params, query: to.query})
        }else{
            next()
        }
            
    }
})

export default router;