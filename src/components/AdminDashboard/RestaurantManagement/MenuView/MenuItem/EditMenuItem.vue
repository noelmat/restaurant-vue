<template>
    <form novalidate class="menu-item-new">
        <input type="text" class="form-element" name='name' id="name" v-model="form.name" placeholder="Item Name">
        <div class="form-line">
            <input type="number" placeholder="Price" class="form-element" v-model="form.price">
            <select name="spice" id="spice" class="form-element" v-model="form.spiceLevel" >
                <option value="" disabled selected>--spice level--</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <select name="rating" id="rating" class="form-element" v-model="form.rating" >
                <option value="" disabled selected>--rating--</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <label for="special"><input type="checkbox" id="special" v-model="form.special"> specials</label> 
        </div>
        <textarea placeholder="Item Description" name="description" v-model="form.description" id="description" rows="2" class="form-element description"></textarea>    
        <div class="btn-panel">
            <a href="" id="btn-add" class="link-unstyled btn-icon" @click.prevent='addItem' title="Save Item">
                <i class="far fa-check-circle"></i>
            </a>
            <a href="" id="btn-cancel" class="link-unstyled btn-icon btn-cancel" @click.prevent='cancel' title="Cancel">
                <i class="far fa-times-circle"></i>
            </a>
        </div>
    </form>
</template> 
<script>
import {updateMenuItem} from '@/services/admin/menuItems';
export default {
    name: 'EditMenuItem',
    props:{
        menuItem: {
            default: function(){
                return {}
            }
        }
    },
    data(){
        return {
            form: {
                name: '',
                price: '',
                spiceLevel: '',
                rating: '',
                special: false,
                description: '',
            }
        }
    },
    created(){
        if(Object.keys(this.menuItem).length !== 0)[
            this.form = {
                ...this.menuItem
            }
        ]
    },
    methods: {
        addItem(){
            if(this.isValid()){
                updateMenuItem(this.menuItem._id, this.form)
                .then(menuItem => {
                    this.$emit('menu-item-updated', menuItem);
                    this.resetForm();
                    this.$emit('cancel')
                })
                .catch(error =>{
                    this.$toast.error(`${error.message}`)
                })
            }else{
                this.$toast.error('Please fill all the fields correctly');
            }
            
        },
        isValid(){
            return Boolean(this.form.name && this.form.price && this.form.spiceLevel && this.form.rating && this.form.description)
        },
        cancel(){
            this.resetForm();
            this.$emit('cancel');
        },
        resetForm(){
            this.form = {
                name: '',
                price: '',
                spiceLevel: '',
                rating: '',
                special: false,
                description: '',
            }
        }
    }
}
</script>
<style scoped>
.menu-item-new{
    width: 90%;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.2);
    margin: .4em 0;
    display: flex;
    flex-direction: column;
}
.form-element{
    padding: .8em;
    border: 0;
    border-radius: 0;
    border-bottom: .5px solid rgba(0,0,0,0.1);
    margin: 2px;
    /* background-color: #fff; */
}
.description{
    border-bottom: 0;
}
select.form-element{
    min-width: 50px;
    max-width: 50px;
    padding-left: 0;
    padding-right: 0;
}

.form-element:focus-visible{
    outline: 0;
}
.form-line{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.form-line > *{
    width: 6em;
}


.form-line > *{
    margin-left: 1em;
}
.form-line > *:first-child{
    margin-left: 1px;
}
#special{
    margin: .5em
}
.btn-panel{
    display: flex;
}
.btn:hover{
    box-shadow: 0 1px 5px 1px rgba(0,0,0,0.2);
}
.btn-panel{
    margin: .5em 0;
    display: flex;
    align-items: center;
    justify-content: center;;
}
.btn-icon{
    border-radius: 50%;
    font-size: 2em;
    padding: 0 .5em;
    color: #fc8019;
}

.btn-cancel{
    color: #333;
}
#special:checked{
    background-color: #fc8019;
}
@media (min-width: 750px) {
    .form-line{
        display: flex;
        align-items: center;
    }
    .btn-icon{
        color: #fc8019;
    }
    .btn-cancel{
        color: #333;
    }
    .btn-cancel:hover{
        color: crimson;
    }

}

</style>