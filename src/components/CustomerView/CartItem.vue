<template>
    <div class="cart-item">
        <div class="detail name">{{name}}</div>
        <div class="details">
            <div class="price">₹ {{price}}</div>
            <div class="qty">
                <a href="" class="link-unstyled decrement" @click.prevent="increment(-1)"><i class="fas fa-minus"></i></a>
                <p class="value">{{quantity}}</p>
                <a href="" class="link-unstyled increment" @click.prevent="increment(1)"><i class="fas fa-plus"></i></a>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'CartItem',
    props: [
        'cartItem',
    ],
    computed: {
        item(){
            return this.cartItem.item;
        },
        name(){
            return this.item.name;
        },
        quantity(){
            return this.cartItem.quantity;
        },
        price(){
            return this.item.price * this.quantity;
        }
    },
    methods:{
        increment(qty){
            // let message = 'Added';
            // if(qty < 0){
            //     message = 'Removed';
            // }
            const item = {}
            item._id = this.cartItem._id;
            item.quantity = qty;
            this.$store.dispatch({
                type: 'addToCart',
                item,
                quantity: this.quantity
            }).then(()=>{
                // this.$toast.success(`${this.item.name} ${message}`)
            })

            this.$store.dispatch({
                type: 'addToCart',

            })
        }
    }
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
    margin: .5em 0;
    position: relative;

}
.times{
    font-size: .8em;
}
.details{
    flex-basis: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.name{
    width: 100%;
    flex-basis: auto;
}
.qty{
    display: flex;
    align-items: center;
    border: 1px solid #333;
    justify-content: center;
    background-color: #333;
    font-size: .8em;
}
.price{
    font-size: 1.2em;
}
.link-unstyled{
    color: #fff;
    margin: 0;
    padding: 0;
    font-size: .7em;
    padding: 0 4px;
    /* font-size: px; */
    /* line-height: 1; */
    /* height: 16px; */
}
.value{
    padding: 0 4px;
    font-size: 14px;
    /* border: 1px solid #333; */
    /* font-size: .; */
    margin: 0;
    background-color: #fff;

}
.delete-item{
    /* color: #fc8019; */
}
</style>