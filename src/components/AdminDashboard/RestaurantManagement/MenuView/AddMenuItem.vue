<template>
    <form novalidate class="menu-item-new">
        <input type="text" class="form-element" name='name' v-model="form.name" placeholder="Item Name">
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
        <textarea placeholder="Item Description" name="description" v-model="form.description" id="" rows="2" class="form-element description"></textarea>    
        <div class="btn-panel">
            <a href="" class="link-unstyled btn-icon" @click.prevent='addItem' title="Save Item">
                <i class="far fa-check-circle"></i>
            </a>
            <a href="" class="link-unstyled btn-icon btn-cancel" @click.prevent='cancel' title="Cancel">
                <i class="far fa-times-circle"></i>
            </a>
        </div>
    </form>
</template> 
<script>
import {addMenuItem} from '@/services/admin/menuItems';
export default {
    name: 'AddMenuItem',
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
            addMenuItem(this.form)
                .then(menuItem => {
                    this.$emit('menu-item-added', menuItem);
                    this.resetForm();
                    this.$emit('cancel')
                })
                .catch(error =>{
                    this.$toast.error(`${error.message}`)
            })
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
    border: 1px solid #000;
    margin: .4em 0;
    display: flex;
    flex-direction: column;
}
.form-element{
    padding: .8em;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid #000;
    margin: 2px;
    background-color: #fff;
}
select.form-element{
    min-width: 40px;
    max-width: 40px;
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
    margin: 0;
}
.btn-panel{
    display: flex;
}
.btn:hover{
    box-shadow: 0 1px 5px 1px rgba(0,0,0,0.2);
}
.btn-panel{
    margin: 1em 0 0;
    display: flex;
    align-items: center;
    justify-content: center;;
}
.btn-icon{
    border-radius: 50%;
    font-size: 2em;
    padding: 0 .5em;
    color: #673AB7;

}

.btn-cancel{
    color: crimson;
}
#special{
    margin: .5em
}
@media (min-width: 750px) {
    .form-line{
        display: flex;
        align-items: center;
    }
    .btn-icon{
        color: #333;
    }
    .btn-icon:hover{
        color: #673AB7
    }
    .btn-cancel:hover{
        color: crimson;
    }

}

</style>