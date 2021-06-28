import { shallowMount } from "@vue/test-utils";
import RestaurantManagement from '@/components/AdminDashboard/RestaurantManagement/RestaurantManagement';

describe('RestaurantManagement', ()=>{
    it('renders', ()=>{
        const wrapper = shallowMount(RestaurantManagement);
        expect(wrapper.find(".restaurant-management").exists()).toBe(true);
        expect(wrapper.find(".empty-list").text()).toBe('No Menus Found. Get started by adding a new Menu')
    })
})