<template>
    <div class="sidepanel">
        <div class="user-details">
            <div class="greeting">
                {{name}}
            </div>
            <a href="" id="logout" class="logout" @click.prevent="confirmLogout"><i class="fas fa-sign-out-alt"></i><span>logout</span></a>
        </div>

        <router-link :to="{name: 'customer-home'}" class="link-unstyled sidepanel-link" active-class="active" exact>
            <i class="fas fa-home"></i><span>Home</span>
        </router-link>
        <router-link :to="{name: 'customer-orders'}" class="link-unstyled sidepanel-link" active-class="active" exact>
            <i class="fas fa-shopping-cart"></i><span>Orders</span>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'SidePanel',
    methods: {
        confirmLogout(){
            this.$store.dispatch({
                type: 'confirmLogout',
                confirmLogout: true
            })
        },

    },
    computed:{
        name(){
            return this.$store.state.customerAuth.name;
        }
    }
}
</script>
<style scoped>
.sidepanel{
    max-width: 70px;
    min-width: 70px;
    background-color: #333;
    height: 100%;
    transition: width .4s;
    position: fixed;
}
.sidepanel span{
    display: none;
}

.user-details{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 2em 0;
    text-align: center;
    color: #fff;
    font-size: .8em;
}
.user-details div{
    padding: 0.2em 0;
}
.greeting{
    font-size: 1.3em;
}

.logout{
    color: #fff;
    font-size: 1.2em;
    padding-top: 1em;
}
.user-image{
    width: 60%;
    overflow: hidden;
}
.user-image img{
    border-radius: 50%;
}

.sidepanel-link{
    text-align: center;
    padding: 1em 1.5em;
    color: #fff;
    font-weight: bold;
    display: block;
}
.active{
    background-color: #FC8019;
}
@media (min-width: 900px) {
    .sidepanel{
        max-width: 230px;
        min-width: 230px;
        background-color: #333;
        height: 100%;
        transition: width .4s;
        position: fixed;
    }

    .sidepanel span{
        display: initial;
        padding-left: 1em;
    }
    .sidepanel-link{
        padding: 1em .8em;
        margin-left: 1.2em;
        text-align: initial;

    }
}

</style>