import { shallowMount } from "@vue/test-utils";
import ModalComponent from "@/components/GlobalComponents/ModalComponent/ModalComponent"

describe("ModalComponent", ()=>{
    it("Renders", ()=>{
        const wrapper = shallowMount(ModalComponent, {
            slots: {
                default: '<div class="msg"></div>'
            }
        })
        expect(wrapper.find('.backdrop').exists()).toBe(true);
        expect(wrapper.find('.msg').exists()).toBe(true);
    })
})