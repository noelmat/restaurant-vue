<template>
    <div class="wrapper">
        <h2 class="heading">Active Orders</h2>
        <div class="orders">
            <OrderCard v-for="id in Object.keys(orders)" :key="id" :order="orders[id]"/>  
        </div>
        <div class='empty' v-if="Object.keys(orders).length === 0">No Active Orders</div>
    </div>
</template>
<script>
import {activeOrders} from '@/services/eventSource/activeOrders';
import OrderCard from './OrderCard.vue';
export default {
    name: "OrderManagement",
    title: 'Order Management | Dashboard',
    components: {
        OrderCard
    },
    created(){
        activeOrders();
    },
    beforeRouteLeave(to, from , next){
        this.$store.dispatch({
            type: "stop_tracking"
        })
        next();
    },
    computed:{
        orders(){
            return this.$store.getters.orders
        }
    }
}
</script>
<style scoped>
.wrapper{
    margin : 3em;
}
.orders{
    display: flex;
    flex-wrap: wrap;

}
.heading{
    /* margin-left: 1em; */
}
.empty{
    padding: 1em;
    border: 1px solid green;
    border-radius: 3px;
    color: green;
}
</style>