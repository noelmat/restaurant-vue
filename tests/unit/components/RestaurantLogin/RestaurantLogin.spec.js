import { shallowMount, createLocalVue } from "@vue/test-utils";
import RestaurantLogin from '@/components/RestaurantLogin/RestaurantLogin';
import Vuelidate from 'vuelidate';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuelidate);
localVue.use(Vuex);

describe('RestaurantLogin.vue', ()=>{
    let actions;
    let store;
    let toast;
    let router;

    beforeEach(()=> {
        actions = {
            login: jest.fn(),
        };
        store = new Vuex.Store({
            actions
        })
        toast = {
            error : jest.fn(),
            success: jest.fn()
        }
        router = {
            push: jest.fn()
        }
    })
    it('renders successfully', ()=>{
        const wrapper = shallowMount(RestaurantLogin,{
            localVue, store          
        });
        expect(wrapper.find('.heading').text()).toBe('Restaurant Login');
    })
    it('form submits successfully', async ()=>{
        const wrapper = shallowMount(RestaurantLogin,{localVue, store, mocks:{$router: router}});
        wrapper.find('#username').setValue('username');
        wrapper.find('#password').setValue('password');
        await wrapper.find('#submit').trigger('click');
        await wrapper.vm.$nextTick();
        expect(actions.login).toHaveBeenCalled();
        expect(actions.login).toHaveBeenCalledTimes(1);
        expect(router.push).toHaveBeenCalled();
    })
    it('empty form submit fails', async()=>{
        const wrapper = shallowMount(RestaurantLogin,{localVue, store,mocks:{$toast: toast}});
        await wrapper.find('#submit').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.$v.form.$invalid).toBe(true);
        expect(actions.login).toHaveBeenCalledTimes(0);
        expect(toast.error).toHaveBeenCalledTimes(1);
        expect(toast.error).toHaveBeenCalledWith("Please fill the fields correctly");
        
    })
    it('no password form submit fails', async()=>{
        const wrapper = shallowMount(RestaurantLogin,{localVue, store,mocks:{$toast: toast}});
        wrapper.find('#username').setValue('username');
        await wrapper.find('#submit').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.$v.form.$invalid).toBe(true);
        expect(actions.login).toHaveBeenCalledTimes(0);
        expect(toast.error).toHaveBeenCalledTimes(1);
        expect(toast.error).toHaveBeenCalledWith("Please fill the fields correctly");

    })
    it('no username form submit fails', async()=>{
        const wrapper = shallowMount(RestaurantLogin,{localVue, store,mocks:{$toast: toast}});
        wrapper.find('#password').setValue('password');
        await wrapper.find('#submit').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.$v.form.$invalid).toBe(true);
        expect(actions.login).toHaveBeenCalledTimes(0);
        expect(toast.error).toHaveBeenCalledTimes(1);
        expect(toast.error).toHaveBeenCalledWith("Please fill the fields correctly");

    })
    it('login fail at server', async()=>{
        actions = {
            login: jest.fn(()=>{return Promise.reject(error)}),
        };
        store = new Vuex.Store({
            actions
        })
        const error = {message: "Error 500"}
        const wrapper = shallowMount(RestaurantLogin,{localVue, store,mocks:{$toast: toast}});
        wrapper.find('#username').setValue('username');
        wrapper.find('#password').setValue('password');
        await wrapper.find('#submit').trigger('click');
        await wrapper.vm.$nextTick();
        expect(actions.login).toHaveBeenCalled();
        expect(actions.login).toHaveBeenCalledTimes(1);
        expect(toast.error).toHaveBeenCalledWith(`${error.message} occured`);


    })
})