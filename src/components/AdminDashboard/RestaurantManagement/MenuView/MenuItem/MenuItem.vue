<template>
    <div class="menu-item" v-if="!editMode">
        <div class="menu-item-line">
            <h4 class="name">
                {{item.name}}
            </h4>
            <div class="special" v-if="item.special">
                specials
            </div>
        </div>
        <div class="menu-item-line ">
            <div class="price">
                ₹ {{item.price}}
            </div>
            <div class="spice-level">
                <span>{{ item.spiceLevel}}</span> 
                <i class="fas fa-pepper-hot" v-for="n in 5" :class="{'active': n<=item.spiceLevel}" :key="n"></i>
            </div>
            <div class="rating">
                <span>{{ item.rating}}</span>
                <i class="fa-star" v-for="n in 5" :class="{'fas': n<=item.rating, 'far': !n<item.rating}" :key="n"></i>

            </div>
            <div class="btn-panel">
                <a href="" class="link-unstyled" title="Edit item" @click.prevent="edit"><i class="fas fa-edit"></i></a>
                <a href="" class="link-unstyled" title="Delete item" @click.prevent="requestDelete"><i class="fas fa-times-circle"></i></a>
            </div>

        </div>
        <div class="menu-item-line" >
            {{ item.description }}
        </div>
        <ModalComponent v-if="showConfirm"><ConfirmBox :message="`Are you sure you want to delete : ${item.name}`" buttonText="Delete" @confirm="deleteItem" @cancel="cancelDelete"/></ModalComponent>
    </div>
    <EditMenuItem :menuItem="item"  @menu-item-updated="updateSuccess" @cancel="cancelEdit" v-else/>
    
</template>
<script>
import {deleteMenuItem} from '@/services/admin/menuItems.js'
import EditMenuItem from './EditMenuItem.vue';
export default {
    name: 'MenuItem',
    components: {
        EditMenuItem
    },
    props: [
        'menuItem'
    ],
    data(){
        return {
            editMode: false,
            item: {...this.menuItem},
            showConfirm: false
        }
    },
    methods:{
        requestDelete(){
            this.showConfirm = true;
        },
        cancelDelete(){
            this.showConfirm = false;
        },
        edit(){
            this.editMode = true;
        },
        cancelEdit(){
            this.editMode = false;
        },
        updateSuccess(event){
            this.$toast.success(`Changes saved`)
            this.item = {
                ...event
            }
        },
        deleteItem(){
            deleteMenuItem(this.item._id)
            .then(menuItem => {
                this.$emit('delete-item', menuItem._id);
                this.$toast.success(`${menuItem.name} deleted`, {
                    timeout: 2000
                })
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }
}
</script>
<style scoped>
.menu-item{
    width: 90%;
    border-radius: 5px;
    border: 1px solid #000;
    margin: .4em 0;
    display: flex;
    flex-direction: column;
    background-color: #fff;
}
.menu-item-line{
    display: flex;
    justify-content: space-between;
    padding: .4em .5em .4em;

}
.menu-description{
    padding: .8em;
    display: flex;
}
.spice-level i{
    display: none;
}
.spice-level span{
    margin-right: .4em;
    font-weight: bold;
}
.spice-level i:first-of-type{
    display: initial;
}
.spice-level i{
    color: #aaa;
}
.spice-level .active{
    color: crimson;
}
.rating i{
    display: none;
}
.rating span{
    margin-right: .4em;
    font-weight: bold;
}
.rating i:first-of-type{
    display: initial;
}

.description{
    width: 100%;
    border-radius: 10px;
}
.form-element{
    padding: .2em 0;
}
.special{
    background-color: #673AB7;
    padding: .2em 1em;
    color: #fff;
}

@media (min-width: 600px) {
    .spice-level span{
        display: none;
    }
}
@media (min-width: 900px) {
    .menu-item-line{
        padding: .8em .8em .4em;
    }
  
}
</style>