<template>
    <div class="panel">
        <div class="status"  :class="order.status">
            Current Status:  {{order.status}}
        </div>
        
        <h2 class="heading">Order ID: {{order._id}}</h2>
        <div class="details">
            <div class="item" v-for="item in items" :key="item._id">
                <div class="name">
                    {{item.name}}
                </div>
                <div class="quantity">
                    {{item.quantity}}
                </div>
            </div>
        </div>
        <a href="" class="link-unstyled btn-next" @click.prevent="changeStatus">Mark {{actions[order.status]}}</a>
    </div>
</template>
<script>
import {updateOrderStatus} from '@/services/admin/orders';

export default {
    name: "OrderCard",
    props: [
        'order'
    ],
    data(){
        return {
            actions: {
                'received': 'in-progress',
                'in-progress': 'dispatched',
                'dispatched': 'completed',
            }
        }
    },
    methods:{
        changeStatus(){
            updateOrderStatus(this.order._id, this.actions[this.order.status])
                .then(()=>{
                    this.$toast.success(`Mark order as ${this.actions[this.order.status]}`)
                })
                .catch(error=>{
                    this.$toast.error(`${error.message} occured`)
                })
        }        
    },
    computed:{
        items(){
            return this.order.items.map(item => {
                return {
                    name: item.itemId.name,
                    quantity: item.quantity
                    }})
        }
    }
}
</script>
<style scoped>
.panel{
    margin: 1em .4em;
    background-color: #fff;
    box-shadow: 0 1px 4px 1px rgba(0,0,0,.1);
    border-radius: 3px;
    max-width: 280px;
    padding: 1em;
    display: flex;
    flex-direction: column;
}
.details{
    display: flex;
    flex-direction: column;
}
.item{
    display: flex;
    justify-content: space-between;
    padding: 4px;
}

.heading{
    font-size: 1em;
}
.status{
    padding: .4em;
    color: #fff;
}
.in-progress{
    background-color: green;
}
.received{
    background-color: crimson;
}
.dispatched{
    background-color: lightgreen;
}
.completed{
    background-color: #333;
}
.btn-next{
    padding: 1em;
    background-color: #555;
    color: #fff;
    margin: 0 auto;
    margin-top: 5px;
}
@media (min-width: 900px) {
    .wrapper{
        margin : 1em;
    }
    .panel{
        margin: 1em;
    }

    
}
</style>