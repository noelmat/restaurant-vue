<template>
    <div class="wrapper">
        <h2>Customer Details</h2>
        <div class="panel">
            <div class="customer-details">
                <form novalidate class="details-form">
                    <div class="form-group">
                        <label for="name">Name: </label>
                        <input type="text" name="name" id="name" class="form-element" :disabled="!editMode">
                    </div>
                    <div class="form-group">
                        <label for="email">Email: </label>
                        <input type="email" name="email" id="email" class="form-element" :disabled="!editMode">
                    </div>
                    <div class="form-group">
                        <label for="primaryContact"> Primary Contact: </label>
                        <input type="text" name="primaryContact" id="primaryContact" class="form-element" :disabled="!editMode">
                    </div>
                    <div class="form-group">
                        
                        <div class="btn-panel">
                            <a href="" class="link-unstyled btn btn-edit" @click.prevent="edit" v-if="!editMode">
                                    Edit
                            </a>
                            <a href="" class="link-unstyled btn btn-save" @click.prevent="save" v-if="editMode">Save</a>
                            <a href="" class="link-unstyled btn btn-cancel" @click.prevent="cancelEdit" v-if="editMode">Cancel</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <h2>Address</h2>
        <div class="addressPanel">
            <AddressCard v-for="address in customer.address" :key="address._id" :address="address"/>
            <a class="add-address">
                <i class="fas fa-plus"></i>
            </a>
        </div>
        
    </div>
    
</template>
<script>
import AddressCard from '@/components/CustomerView/AddressCard';
import {getCustomerDetails} from '@/services/customer/customer';

export default {
    name: 'CustomerHome',
    components: {
        AddressCard
    },
    data(){
        return {
            form: {
                name: '',
                email: '',
                primaryContact:'',
            },
            customer : {},
            editMode: false
        }
    },
    created(){
        getCustomerDetails()
            .then(customer => {
                this.customer = customer
            })
            .catch(error=>{
                this.$toast.error(`${error.message}`);
            })
    },
    methods: {
        edit(){
            this.editMode = !this.editMode;
        },
        cancelEdit(){
            this.editMode = !this.editMode;
        },
        save(){

        }
    }
}
</script>
<style scoped>
.wrapper{
    margin : 1em;
    overflow-y: auto;
}
.panel{
    margin: 1em 0;
    background-color: #fff;
    box-shadow: 0 1px 4px 1px rgba(0,0,0,.1);
    border-radius: 3px;
}
.addressPanel{
    display: flex;
    margin: 1em 0;
    flex-direction: column;
}
.addressPanel > *{
    width: 100%;
}
.add-address{
    background-color: #fff;
    box-shadow: 0 1px 3px 1px rgba(0,0,0,.1);
    margin-top: 1em;
    padding: 2em;
    text-align: center;
}
h2{
    margin-left: .5em;
}
.customer-details{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

}
.details-form{
    margin: 3em;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80%;
}
.form-group{
    font-size: 1.1em;
    display: flex;
    flex-direction: column;
    width: 100%;
}
.form-element{
    width: 100%;
    padding: .5em;
    border-radius: 2px;
    border: 1px solid #aaa;
}
.btn-panel{
    margin-top: 1em;
    display: flex;
    width: 100%;
    justify-content: space-around;
}
.btn{
    padding: .5em;
    color: #fff;
    border-radius: 2px;
    width: 80px ;
    text-align: center;
}
.btn-edit{    
    background-color: #555;
}
.btn-save{
    background-color: #FC8019;
}
.btn-cancel{
    background-color: #555;
}
</style>