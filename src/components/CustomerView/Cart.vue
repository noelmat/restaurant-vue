<template>
    <div class="container">
        <div class="head">
            <a href="" class="link-unstyled" @click.prevent="back"><i class="fas fa-chevron-left"></i></a>
            <h1 class="heading">
                Cart
            </h1>
        </div>
        <div class="cart-details">
            <CartItem v-for="item in cart.items" :key="item._id" :cartItem="item"/>
            <div class="empty" v-if="cartTotal === 0">No items in Cart</div>
        </div>
        <div class="btn-panel">
            <a href="" :class="{'disabled': cartItems===0}" class="link-unstyled btn btn-cta" @click.prevent="handleClick">
                <span>{{itemString}}  | ₹ {{cartTotal}}</span>
                Checkout
            </a>
        </div>
    </div>
</template>
<script>
import CartItem from './CartItem.vue';
export default {
    name: 'Cart',
    components: {
        CartItem
    },
    created(){
        if(this.$store.getters.cart.items === undefined){
            this.$store.dispatch({
                type: 'loadSession'
            })
        }
    },
    methods:{
        back(){
            this.$router.push({name: 'home'})
        },
        handleClick(){
            if(this.cartItems===0) return;
            this.$router.push({name: 'order', params: {cart: this.cart._id}})
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
.container{
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f8f8f8;
}
.head{
    background-color: #f8f8f8;
    color: #333;
    padding: 1em 2em;
    width: 100%;
    top: 0;
    flex-basis: 10%;
    display: flex;
    align-items: center;
}
.head a{
    color: #333;
    font-size: 1.2em;
}
.heading{
    margin: 0;
    margin-left: .9em;
    font-size: 1.5em;
}
.cart-details{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 0;
    flex-basis: 80%;
    overflow-y: scroll;
}
.btn-panel{
    flex-basis: 10%;
    flex-direction: row;
    display: flex;
    width: 100%;
}
.btn{
    padding: 1em;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    flex-basis: 100%;
    
}   
.total{
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fc8019;
    color: #fff;
    font-size: 1.5em;
}
.btn-cta{
    border-radius: 0px;
    background-color: #fc8019;
    color: #fff;
    font-size: 22px;
}
.disabled{
    background-color: #777;
}
</style>