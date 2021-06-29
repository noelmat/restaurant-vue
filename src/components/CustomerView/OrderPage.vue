<template>
    <div class="wrapper">
        <div class="heading">
            <a href="" class="link-unstyled" @click.prevent="back"><i class="fas fa-chevron-left"></i></a>
            <h1>Order Summary</h1>
        </div>
        <div class="summary">
            <OrderItem v-for="item in cart.items" :key="item._id" :orderItem="item"/>
        </div>
        <div class="select-address">
            <h2>Select an address</h2>
            <AddressCard v-for="address in this.customer.address" :key="address._id" :address="address" @click="selectAddress(address._id)" :class="{'addressSelected': address._id === selectedAddress}">
                {{address.addressLine1}}
            </AddressCard>
        </div>
        <div class="btn-panel">
            <a href="" class="link-unstyled btn btn-cta" @click.prevent="placeOrder">
                <span>{{itemString}}  | ₹ {{cartTotal}}</span>
                Proceed to Pay
            </a>
        </div>

    </div>
</template>
<script>
import AddressCard from './AddressCard.vue';
import OrderItem from './OrderItem.vue';
import {getCustomerDetails} from '@/services/customer/customer';
import {placeOrder} from '@/services/customer/orders';

export default {
    name: "OrderPage",
    components: {
        OrderItem,
        AddressCard
    },
    data(){
        return {
            selectedAddress: '',
            customer : {}
        }
    },
    created(){
        if(this.$store.getters.cart.items === undefined){
            this.$store.dispatch({
                type: 'loadSession'
            })
        }
        getCustomerDetails()
            .then(customer => {
                this.customer = customer
            })
            .catch(error=>{
                this.$toast.error(`${error.message}`);
            })
        
    },
    methods: {
        back(){
            this.$router.push({name: 'cart'})
        },
        selectAddress(event){
            console.log(event);
            this.selectedAddress = event;
        },
        placeOrder(){
            if(!this.selectedAddress){
               return this.$toast.info("Please select an address");
            }
            const orderDetails = this.createOrder();
            placeOrder(orderDetails)
            .then(()=>{
                this.$router.push({name: 'home'});
                this.$toast.success('Order has been placed Successfully');
                return this.$store.dispatch({
                            type: "loadSession"
                        })
            })
            .catch(error =>{
                this.$toast.error(`${error.message}`);
            })
        },
        createOrder(){
     
            const items = this.cart.items.map(item =>{
                return {
                    itemId: item.item._id,
                    quantity: item.quantity
                }
            });
            return {
                address: this.selectedAddress,
                items
            }
        }
    },
    computed:{
        cart(){
            return this.$store.getters.cart;
        },
        cartItems(){
            return this.$store.getters.cartLength;
        },
        itemString(){
            if(this.cartItems === 1){
                return `1 item`;
            }
            return `${this.cartItems} items`
        },
        cartTotal(){
            let total = 0
            if(this.$store.getters.cart.items !== undefined){
                this.$store.getters.cart.items.forEach(( item) => {
                    total += (item.item.price * item.quantity);
                })
            }
            return total;
            
        }

    }

}
</script>
<style scoped>
.wrapper{
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: auto;
    background-color: #f8f8f8;
    justify-content: space-between;
}
.heading{
    background-color: #f8f8f8;
    color: #333;
    margin: 0;
    padding: 1em 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1em 2em;

}
.heading  a{
    color: #333;
    font-size: 19px;
}
h1{
    margin: 0;
    margin-left: .9em;
    font-size: 1.5em;

}
.summary{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}
.btn-panel{
    flex-basis: 10%;
    flex-direction: row;
    display: flex;
    width: 100%;
    align-self: flex-end;
    justify-self: flex-end
}

.btn{
    padding: 1em;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    flex-basis: 100%;
}   
.btn-cta{
    border-radius: 0px;
    background-color: #fc8019;
    color: #fff;
    font-size: 22px;
    text-align: center;
}
.select-address{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
}
.select-address > a{
    margin-top: 1em;
}

.addressSelected{
    background-color: #fc7f1957;
}
</style>