import {shallowMount, createLocalVue} from '@vue/test-utils';
import ContentPanel from '@/components/AdminDashboard/MainPanel/ContentPanel/ContentPanel';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ContentPanel', ()=>{
    let state;
    let store; 
    let actions;
    beforeEach(()=>{
        state = {
            confirmLogout: true
        }
        actions = {
            logout: jest.fn(),
            confirmLogout: jest.fn()
        }
        store = new Vuex.Store({
            modules: {
                authentication: {
                    state,
                    actions
                }
            },
            
            
        })
    })
    it('renders', ()=> {
        const wrapper = shallowMount(ContentPanel, {
            localVue, store, stubs: ['router-view', 'modal-component', 'confirm-box']
        });
        expect(wrapper.find('.content-panel').exists()).toBe(true);
    })
    it('logs out successfully', async()=> {
        const wrapper = shallowMount(ContentPanel, {
            localVue, store, stubs: ['router-view', 'modal-component', 'confirm-box']
        });
        await wrapper.vm.logout();
        await wrapper.vm.$nextTick();

        expect(actions.logout).toBeCalled();
        expect(actions.logout).toBeCalledTimes(1);
        expect(actions.confirmLogout).toBeCalled();
        expect(actions.confirmLogout).toBeCalledTimes(1);

    })
    it('cancel Logout', async()=> {
        const wrapper = shallowMount(ContentPanel, {
            localVue, store, stubs: ['router-view','modal-component', 'confirm-box']
        });
        await wrapper.vm.cancelLogout();
        expect(actions.confirmLogout).toBeCalled();
        expect(actions.confirmLogout).toBeCalledTimes(1);

    })
})