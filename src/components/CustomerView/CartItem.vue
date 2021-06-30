<template>
    <div class="cart-item">
        <div class="detail name">{{name}}</div>
        <div class="details">
            <div class="qty">
                <a href="" class="link-unstyled decrement"  @click.prevent="increment(-1)"><i class="fas fa-minus"></i></a>
                <p class="value">{{quantity}}</p>
                <a href="" class="link-unstyled increment" @click.prevent="increment(1)"><i class="fas fa-plus"></i></a>
            </div>
            <div class="price">₹ {{price}}</div>
        </div>
        <div class="loading" v-if="loading">
            Processing
        </div>
    </div>
</template>
<script>
export default {
    name: 'CartItem',
    props: [
        'cartItem',
    ],
    data(){
        return {
            loading : false
            }
    },
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
            this.loading = true;
            const item = {}
            item._id = this.cartItem._id;
            item.quantity = qty;
            this.$store.dispatch({
                type: 'addToCart',
                item,
                quantity: this.quantity
            }).then(()=>{
                this.loading = false;
            }).catch(err=>{
                this.loading = false;
                this.$toast.success(`${err.message}`);
            })
        }
    }
}
</script>
<style scoped>
.cart-item{
    display: flex;
    width: 90%;
    border-radius: 1px;
    box-shadow: 0 1px 1px 1px rgba(0,0,0,0.2);
    padding: 1em;
    justify-content: flex-end;
    margin:0;
    position: relative;
    background-color: #fff;
    
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
    border: 1px solid #fc8019;
    justify-content: center;
    background-color: #fc8019;
    font-size: .8em;
    margin-bottom: .9em;
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
.cart-loading{
    background-color: rgba(0,0,0,0.2);
}
.loading{
    position: absolute;
    color: #fff;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    z-index: 99;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>