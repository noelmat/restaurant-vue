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
            <div class="total">
                <span>Total {{cartTotal}}</span>
            </div>
            <a class="btn btn-cta">
                Place Order
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
    },
    computed:{
        cart(){
            return this.$store.getters.cart;
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
    /* position: relative; */
    display: flex;
    flex-direction: column;
    /* align-content: space-between; */
    height: 100vh;
}
.head{
    background-color: #555;
    color: #fff;
    padding: 1em 2em;
    width: 100%;
    top: 0;
    flex-basis: 10%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
}
.head a{
    color: #fff;
    font-size: 1.5em;
}
.heading{
    margin: 0;
    margin-left: 2em;
}
.cart-details{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 0;
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
    justify-content: center;
    height: 100%;
    align-items: center;
    flex-basis: 50%;
}   
.total{
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    color: #fff;
    font-size: 1.5em;
}
.btn-cta{
    border-radius: 0px;
    background-color: orange;
    color: #fff;
    /* font-weight: bold; */
    font-size: 1.5em;
}
</style>