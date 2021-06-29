import {shallowMount, createLocalVue} from '@vue/test-utils';
import SidePanel from '@/components/AdminDashboard/SidePanel/SidePanel';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);


describe('SidePanel', ()=>{
    let state;
    let store; 
    let actions;
    beforeEach(()=>{
        state = {
            name: 'Name',
            role: 'Role'
        }
        actions = {
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
    it('renders',()=>{
        const wrapper = shallowMount(SidePanel, {localVue, store, stubs: ['router-link']});
        expect(wrapper.find('.sidepanel').exists()).toBe(true);
        expect(wrapper.find('.greeting').text()).toBe(state.name);
        
    })
    it('click on logout', async()=>{
        const wrapper = shallowMount(SidePanel, {localVue, store, stubs: ['router-link','router-view']});
        await wrapper.find('#logout').trigger('click')
        expect(actions.confirmLogout).toHaveBeenCalled();
        expect(actions.confirmLogout).toHaveBeenCalledTimes(1);
    })
})