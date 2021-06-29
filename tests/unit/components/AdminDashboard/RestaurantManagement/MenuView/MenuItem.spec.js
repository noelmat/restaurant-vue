import {shallowMount, createLocalVue} from '@vue/test-utils';
import MenuItem from '@/components/AdminDashboard/RestaurantManagement/MenuView/MenuItem/MenuItem.vue';
import * as menuItems from '@/services/admin/menuItems.js'

const localVue = createLocalVue();

describe('MenuItem.vue', ()=>{
    let toast;

    beforeEach(()=> {
        toast = {
            error : jest.fn(),
            success: jest.fn()
        }
    });
    it('renders', ()=>{
        const menuItem = {
            _id: '1234',
            name: 'Name',
            price: 100,
            spiceLevel: 2,
            rating: 3
        }
        const wrapper = shallowMount(MenuItem, {
            propsData: {
                menuItem
            }
        });
        expect(wrapper.find('.name').text()).toBe(menuItem.name);
        expect(wrapper.find('.special').exists()).toBe(false);
        expect(wrapper.find('.price').text()).toBe(`₹ ${menuItem.price}`);
        expect(wrapper.find('.spice-level span').text()).toBe(`${menuItem.spiceLevel}`);
        expect(wrapper.find('.rating span').text()).toBe(`${menuItem.rating}`);
    })
    it('deleteItem Success', async ()=>{
        const mockedDeleteApi = jest.spyOn(menuItems, 'deleteMenuItem');
        mockedDeleteApi.mockImplementation(()=>{
            return Promise.resolve(menuItem);
        })
        const menuItem = {
            _id: '1234',
            name: 'Name',
            price: 100,
            spiceLevel: 2,
            rating: 3
        }
        const wrapper = shallowMount(MenuItem, {
            propsData: { menuItem }, localVue, mocks: {$toast: toast }
        });
        await wrapper.vm.deleteItem();
        expect(mockedDeleteApi).toHaveBeenCalled();
        expect(mockedDeleteApi).toHaveBeenCalledTimes(1);
        expect(toast.success).toHaveBeenCalled();
        expect(toast.success).toHaveBeenCalledTimes(1);
        expect(toast.success).toHaveBeenCalledWith(`${menuItem.name} deleted`);

        mockedDeleteApi.mockRestore();
    })
    it('edit mode works', async()=>{
        const menuItem = {
            _id: '1234',
            name: 'Name',
            price: 100,
            spiceLevel: 2,
            rating: 3
        }
        const wrapper = shallowMount(MenuItem, {
            propsData: { menuItem }, localVue, mocks: { $toast: toast }
        });
        await wrapper.find("#edit").trigger('click');
        expect(wrapper.find('.name').exists()).toBe(false);


    })
    it('deleteItem Failed', async ()=>{
        const mockedDeleteApi = jest.spyOn(menuItems, 'deleteMenuItem');
        const menuItem = {
            _id: '1234',
            name: 'Name',
            price: 100,
            spiceLevel: 2,
            rating: 3
        }
        const error = {message: 'Failed'}
        mockedDeleteApi.mockImplementation(()=>{
            return Promise.reject(error);
        })
        
        const wrapper = shallowMount(MenuItem, {
            propsData: { menuItem }, localVue, mocks: { $toast: toast }
        });
        await wrapper.vm.deleteItem();
        await wrapper.vm.$nextTick();
        expect(mockedDeleteApi).toHaveBeenCalled();
        expect(mockedDeleteApi).toHaveBeenCalledTimes(1);
        expect(toast.error).toHaveBeenCalled();
        expect(toast.error).toHaveBeenCalledTimes(1);
        expect(toast.error).toHaveBeenCalledWith(`${error.message}`);

        mockedDeleteApi.mockRestore();

    })

})