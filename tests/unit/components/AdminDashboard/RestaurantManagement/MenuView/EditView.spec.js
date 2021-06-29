import {shallowMount, createLocalVue} from '@vue/test-utils';
import EditMenuItem from '@/components/AdminDashboard/RestaurantManagement/MenuView/MenuItem/EditMenuItem.vue';
import * as menuItems from '@/services/admin/menuItems.js'

const localVue = createLocalVue();

describe('EditMenuItem.vue',()=>{
    let toast;

    beforeEach(()=> {
        toast = {
            error : jest.fn(),
            success: jest.fn()
        }
    })

    it('renders',async ()=>{
        const menuItem = {
            _id: '1234',
            name: 'Name',
            price: 100,
            spiceLevel: 2,
            rating: 3,
            description: 'Description',
        }
        const wrapper = shallowMount(EditMenuItem, {localVue, mocks:{$toast: toast}, propsData: {menuItem}});
        await wrapper.vm.$nextTick();
        expect(wrapper.find('#name').element.value).toBe(menuItem.name);
        expect(wrapper.find('#spice').element.value).toBe(`${menuItem.spiceLevel}`);
        expect(wrapper.find('#rating').element.value).toBe(`${menuItem.rating}`);
        expect(wrapper.find('#description').element.value).toBe(menuItem.description);

    })
    it('save edit fails', async()=>{
        const mockedUpdateApi = jest.spyOn(menuItems, 'updateMenuItem');
        mockedUpdateApi.mockImplementation(()=>{
            return Promise.reject({message: 'error'});
        })
        const wrapper = shallowMount(EditMenuItem, {localVue, mocks:{$toast: toast}});
        await wrapper.find('#btn-add').trigger('click');
        expect(mockedUpdateApi).toHaveBeenCalled()
        expect(mockedUpdateApi).toHaveBeenCalledTimes(1)
        expect(toast.error).toHaveBeenCalled();
        expect(toast.error).toHaveBeenCalledTimes(1);
        expect(toast.error).toHaveBeenCalledWith("error");

    })
})