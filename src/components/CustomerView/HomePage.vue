<template>
    <div>
        <Navigation/>
        <Header id="home"/>
        <MenuListing id="menu"/>
        <Footer/>
    </div>
    
</template>
<script>
import Header from './Header.vue';
import Navigation from './Navigation.vue';
import MenuListing from './MenuListing.vue';
import Footer from './Footer.vue';

export default {
    name: "HomePage",
    components: {
        Header,
        Navigation,
        MenuListing,
        Footer,
    },
    created(){
        this.$store.dispatch({
            type: 'loadSession'
        }).catch(error =>{
            this.$toast.error(`${error.message} while loading session`)
        })
    }
}
</script>
<style scoped>

</style>