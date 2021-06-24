<template>
    <div class="menu-panel" v-if="!loading">
        <MenuHeader :menu="menu" @edit-menu='editMenu'/>
        <div class="menu-details">
            <h2 class="section-heading">
                Menu Items
            </h2>
            <div class="menu-items menu-list">
                 <div class="empty-menu" v-if="(menuItems.length + specials.length) === 0">
                   Empty Menu. Press the add button to add a menu item
                </div>
                <MenuItem v-for="item in specials" :key="item._id" :menuItem="item" @delete-item="deleteMenuItem"/>
                <MenuItem v-for="item in menuItems" :key="item._id" :menuItem="item" @delete-item="deleteMenuItem"/>
                <AddMenuItem id='add-new-item' @cancel="cancelNewItem" v-if="addItem"  @menu-item-added="addToMenu"/>
               

            </div>
            <AddButton @btn-click="addMenuItem" v-scroll-to="{el: '#add-new-item'}" />
        </div>
        <ModalComponent v-if="edit"><AddEditMenu :menu="menu" @save-menu="saveMenu" @cancel='cancelEdit' title="Edit Menu"/></ModalComponent>
    </div>
</template>
<script>
import {addMenuItemToMenu, getMenu, updateMenu, removeMenuItemFromMenu} from '@/services/admin/menus.js'
import MenuItem from './MenuItem/MenuItem.vue';
import MenuHeader from './MenuHeader.vue';
import AddMenuItem from './AddMenuItem.vue';
import AddEditMenu from './AddEditMenu.vue';
export default {
    name: 'MenuView',
    components: {
        MenuItem,
        MenuHeader,
        AddMenuItem,
        AddEditMenu
    },
    data(){
        return{
            menu : {},
            loading: false,
            addItem : false,
            edit: false
        }
    },
    created(){
        const id = this.$route.params.menuId;
        this.loading = true;
        getMenu(id)
            .then(data => {
                Object.keys(data).forEach(key => {
                    this.$set(this.menu, key, data[key]);
                })
                this.loading = false
            })
            .catch(() => {
                this.loading = false
            })

    },

    methods: {
        addMenuItem(){
            this.addItem = true;
        },

        addToMenu(event){
            addMenuItemToMenu(this.menu._id, {menuItem: event._id})
            .then(()=>{
                return getMenu(this.menu._id)  
            })
            .then(data =>{
                    Object.keys(data).forEach(key => {
            this.$set(this.menu, key, data[key]);
            })

            })    
            .catch(() => {
            })

        },
        cancelNewItem(){
            this.addItem = false;
        },
        saveMenu(event){
            updateMenu(this.menu._id, event)
                .then(()=>{
                this.edit = false;
                return getMenu(this.menu._id)                    
            })
            .then(data =>{
                Object.keys(data).forEach(key => {
                    this.$set(this.menu, key, data[key]);
                })
            })  
            .catch(err => {
                console.log(err);
            })
        },
        cancelEdit(){
            this.edit = false;

        },
        editMenu(){
            this.edit = true;
        },
        deleteMenuItem(event){            
            removeMenuItemFromMenu(this.menu._id, event)
            .then(()=>{
                console.log('deleted Item from menu')
                return getMenu(this.menu._id)                    
            })
            .then(data =>{
                this.menu = {}
                Object.keys(data).forEach(key => {
                    this.$set(this.menu, key, data[key]);
                })
            })  
            .catch(err => {
                console.log(err);
            })

        }
    },
    computed :{
        specials(){
            if(Object.keys(this.menu).length !== 0){
                return this.menu.menuItems.filter(menuItem => menuItem.special)
            }
            return []
        },
        menuItems(){
             if(Object.keys(this.menu).length !== 0){
                return this.menu.menuItems.filter(menuItem => !menuItem.special)
            }
            return []
        }
    }
}
</script>
<style scoped>
.menu-panel{
    background-color: #fff;
    box-shadow: 0 1px 5px 1px rgba(0,0,0,0.2);
    margin: 3em 4em;
    border-radius: 10px;
}

.heading-secondary{
    color: #333;
    align-self: flex-start;
    
}
.section-heading{
    display: inline-block;
    margin: 1.5em 0 1em 2em;
}
.menu-details{
    padding-bottom: 2em;
}
.menu-list{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
}

.empty-menu{
    width: 90%;
    border-radius: 10px;
    border: 1px solid #000;
    padding: .8em ;
    margin: 0 auto;
    color: navy;
    background-color: rgba(0, 0, 128, 0.178)
}
</style> 