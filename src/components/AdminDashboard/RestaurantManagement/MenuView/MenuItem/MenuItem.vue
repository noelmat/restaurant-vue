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
                <i class="fas fa-pepper-hot" v-for="n in 5" :class="{'active': n<=item.spiceLevel}" :key="n"></i>
            </div>
            <div class="rating">
                <i class="fa-star" v-for="n in 5" :class="{'fas': n<=item.rating, 'far': !n<item.rating}" :key="n"></i>

            </div>
            <div class="btn-panel">
                <a href="" class="link-unstyled" title="Edit item" @click.prevent="edit"><i class="fas fa-edit"></i></a>
                <a href="" class="link-unstyled" title="Delete item" @click.prevent="deleteItem"><i class="fas fa-times-circle"></i></a>
            </div>

        </div>
        <div class="menu-item-line" >
            {{ item.description }}
        </div>
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
            item: {...this.menuItem}
        }
    },
    methods:{
        edit(){
            this.editMode = true;
        },
        cancelEdit(){
            this.editMode = false;
        },
        updateSuccess(event){
            this.item = {
                ...event
            }
        },
        deleteItem(){
            deleteMenuItem(this.item._id)
            .then(menuItem => {
                this.$emit('delete-item', menuItem._id);
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
    /* box-shadow: 0 2px 4px 0px rgba(0,0,0,0.3); */
    margin: .4em 0;
    display: flex;
    flex-direction: column;
    background-color: #fff;
}
.menu-item-line{
    display: flex;
    justify-content: space-between;
    padding: .8em .8em .4em;

}
.menu-item-details{
    /* width: 60% */
}
.menu-description{
    padding: .8em;
    display: flex;
}

.spice-level i{
    color: #aaa;
}
.spice-level .active{
    color: crimson;
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
</style>