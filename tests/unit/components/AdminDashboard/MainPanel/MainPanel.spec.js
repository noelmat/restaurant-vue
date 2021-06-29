import {shallowMount} from '@vue/test-utils';
import MainPanel from '@/components/AdminDashboard/MainPanel/MainPanel.vue';

describe('MainPanel', ()=>{
    it('renders', ()=> {
        const wrapper = shallowMount(MainPanel);
        expect(wrapper.find('.mainpanel').exists()).toBe(true);
    })
})