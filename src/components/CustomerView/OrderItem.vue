<template>
    <div class="cart-item">
        <div class="detail name">{{name}}</div>
        <div class="details">
            <div class="qty">
                <span>Qty: </span>

                <p class="value">{{quantity}}</p>
            </div>
            <div class="price">₹ {{price}}</div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'OrderItem',
    props: [
        'orderItem',
    ],
    computed: {
        item(){
            return this.orderItem.item;
        },
        name(){
            return this.item.name;
        },
        quantity(){
            return this.orderItem.quantity;
        },
        price(){
            return this.item.price * this.quantity;
        }
    },
    methods:{

    }
}
</script>
<style scoped>
.cart-item{
    display: flex;
    width: 90%;
    border-radius: 2px;
    /* box-shadow: 0 1px 3px 1px rgba(0,0,0,0.2); */
    border-bottom: 1px solid rgba(0,0,0,0.2);
    padding: 1em;
    padding-bottom: .5em;
    justify-content: flex-end;
    flex-direction: column;
    margin: .5em 0;
    position: relative;

}

.times{
    font-size: .8em;
}
.details{
    flex-basis: 10%;
    display: flex;
    justify-content: flex-end;
}
.name{
    width: 100%;
    flex-basis: auto;
}
.qty{
    width: 30%;
    display: flex;
    font-size: 1em;
    max-width: 100px;
    min-width: 80px;
}
.qty span{
    font-weight: bold;
}
.price{
    font-size: 1em;
}
.link-unstyled{
    color: #fff;
    margin: 0;
    padding: 0;
    font-size: .7em;
    padding: 0 4px;
}
.value{
    padding: 0 1em;
    margin: 0;
    /* background-color: #fff; */

}
@media (min-width: 600px) {
    .cart-item{
        flex-direction: row;
    }
    .details{
        flex-basis: 50%;
    }
}
</style>