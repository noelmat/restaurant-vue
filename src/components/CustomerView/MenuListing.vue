<template>
    <div class="page">
        <div class="listing">
            <MenuPanel :menus="menus" @show-menu="showMenu"/>
            <ItemsPanel :menu="currentMenu" />
        </div>
        
    </div>
</template>
<script>
import {getMenus, getMenu} from '@/services/admin/menus'
import MenuPanel from './MenuListingPanels/MenuPanel.vue';
import ItemsPanel from './MenuListingPanels/ItemsPanel.vue';
export default {
    name: "MenuListing",
    components:{
        MenuPanel,
        ItemsPanel
    },
    data(){
        return {
            menus: [],
            currentMenu : {}
        }
    },
    created(){
        this.loadMenus();
    },
    methods:{
        loadMenus(){
            getMenus()
                .then(menus => {
                    this.menus.push(...menus);
                })
        },
        showMenu(event){
            getMenu(event._id)
            .then(menu => {
                Object.keys(menu).forEach(key => {
                    this.$set(this.currentMenu, key, menu[key]);
                 })
            })
        }
    }
}
</script>
<style scoped>
.page{
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.menu-header{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 30%;
    background-color: #333;
    color: #fff;
}
.listing{
    display: flex;
    flex-basis: 100%;
    position: relative;
    flex-direction: column;  
    height: 100vh;
}

@media (min-width: 900px) {
    .listing{
        flex-direction: row;  
    }
}
</style>