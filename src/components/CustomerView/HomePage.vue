<template>
    <div>
        <Navigation/>
        <Header id="home"/>
        <MenuListing id="menu"/>
    </div>
    
</template>
<script>
import Header from './Header.vue';
import Navigation from './Navigation.vue';
import MenuListing from './MenuListing.vue';

export default {
    name: "HomePage",
    components: {
        Header,
        Navigation,
        MenuListing
    },
    methods:{
        /**
         * if !store customerLoggedIn
         *      -> request for guestId
         *      
         */
    }
}
</script>
<style scoped>

</style>