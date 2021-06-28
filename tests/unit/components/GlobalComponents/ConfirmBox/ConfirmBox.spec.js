import {shallowMount} from '@vue/test-utils';
import ConfirmBox from '@/components/GlobalComponents/ConfirmBox/ConfirmBox';

describe('ConfirmBox', ()=>{
    it('renders', ()=>{
        const message = 'Message';
        const buttonText = 'ButtonText';
        const wrapper = shallowMount(ConfirmBox, {
            propsData: {message,buttonText}
        });
        expect(wrapper.find('.message').text()).toBe(message);
        expect(wrapper.find('#confirm').text()).toBe(buttonText);
        expect(wrapper.find('#cancel').text()).toBe('Cancel');
    })
    it('confirm triggers', async ()=>{
        const emit = jest.fn();
        const message = 'Message';
        const buttonText = 'ButtonText';
        const wrapper = shallowMount(ConfirmBox, {
            propsData: {message,buttonText},
            mocks: {$emit: emit},
        });
        await wrapper.find('#confirm').trigger('click')
        expect(emit).toHaveBeenCalledTimes(1);
        expect(emit).toHaveBeenCalledWith('confirm');
    })
    
    it('cancel triggers', async ()=>{
        const emit = jest.fn();
        const message = 'Message';
        const buttonText = 'ButtonText';
        const wrapper = shallowMount(ConfirmBox, {
            propsData: {message,buttonText},
            mocks: {$emit: emit},
        });
        await wrapper.find('#cancel').trigger('click')
        expect(emit).toHaveBeenCalledTimes(1);
        expect(emit).toHaveBeenCalledWith('cancel');
    })

    it('no props passed', ()=>{
        const wrapper = shallowMount(ConfirmBox);
        expect(wrapper.find('.message').text()).toBe("");
        expect(wrapper.find('#confirm').text()).toBe("");
    })
})