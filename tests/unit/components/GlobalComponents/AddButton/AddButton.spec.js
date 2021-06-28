import {shallowMount} from '@vue/test-utils';
import AddButton from '@/components/GlobalComponents/AddButton/AddButton';

describe('AddButton.vue', ()=>{
    it('renders', ()=>{
        const wrapper = shallowMount(AddButton);
        expect(wrapper.find('.add-btn').exists()).toBe(true);
        expect(wrapper.find('.fa-plus').exists()).toBe(true);
    })
    it('event triggers successfully', async()=> {
        const emit = jest.fn();
        const wrapper = shallowMount(AddButton, {
            mocks: {$emit: emit}
        });
        await wrapper.find('.add-btn').trigger('click');
        expect(emit).toHaveBeenCalled();
        expect(emit).toHaveBeenCalledTimes(1);
        expect(emit).toHaveBeenCalledWith('btn-click');
    })
})