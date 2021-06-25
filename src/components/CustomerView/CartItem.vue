<template>
    <div class="cart-item">
        <div class="name">Item Name</div>
        <span class="times">x</span>
        <div class="qty">2</div>
        <div class="price">20</div>
    </div>
</template>
<script>
export default {
    name: 'CartItem'
}
</script>
<style scoped>
.cart-item{
    display: flex;
    width: 90%;
    border-radius: 10px;
    box-shadow: 0 1px 4px 1px rgba(0,0,0,0.2);
    padding: 1em;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin: .5em 0;
}
.times{
    font-size: .8em;
}
.name{
    width: 100%;
}
.qty{
    margin:0 2em;
}
</style>