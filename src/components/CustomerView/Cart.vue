<template>
    <div class="container">
        <div class="head">
            <h1 class="heading">
                Cart
            </h1>
        </div>
        <div class="cart-details">
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
        <div class="btn-panel">
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
    }
}
</script>
<style scoped>
.head{
    background-color: #555;
    color: #fff;
    padding: 1em 2em;
}
.heading{
    margin: 0;
}
.cart-details{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;
}
.btn{
    padding: 1em;
}
.btn-cta{
    border-radius: 10px;
}
</style>