<template>
    <div class="sidepanel">
        <div class="user-details">
            <div class="greeting">
                Hi {{name}}
            </div>
            <div class="designation">
                {{role}}
            </div>
            <a href="" class="logout" @click.prevent="logout">logout</a>
        </div>
        <router-link :to="{name: 'dashboard-home'}" class="link-unstyled sidepanel-link" active-class="active" exact>
            Home
        </router-link>
        <router-link :to="{name: 'dashboard-orders'}" class="link-unstyled sidepanel-link" active-class="active" exact>
            Orders
        </router-link>
        <router-link :to="{name: 'dashboard-menus'}" class="link-unstyled sidepanel-link" active-class="active">
            Menus
        </router-link>
        <router-link :to="{name: 'dashboard-users'}" class="link-unstyled sidepanel-link" active-class="active">
            Users
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'SidePanel',
    methods: {
        logout(){
            this.$store.dispatch({
                type: 'logout'
            }).then(()=> {
                this.$router.push({name: 'restaurant-login'})
            })
        }
    },
    computed:{
        name(){
            return this.$store.state.authentication.name;
        },
        role(){
            return this.$store.state.authentication.role;
        }
    }
}
</script>
<style scoped>
.sidepanel{
    max-width: 230px;
    min-width: 230px;
    background-color: #333;
    height: 100%;
    transition: width .4s;
    position: fixed;
}
.sidepanel-closed{
    max-width: 80px;
    min-width: 80px;
    background-color: #673AB7;
}
.user-details{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 2em 0;
    text-align: center;
    color: #fff;
    font-size: .9em;
}
.user-details div{
    padding: 0.2em 0;
}
.greeting{
    font-size: 1.3em;
}

.logout{
    color: #fff;
}
.user-image{
    width: 60%;
    overflow: hidden;
}
.user-image img{
    border-radius: 50%;
}

.sidepanel-link{
    /* text-align: center; */
    padding: 1em 2em;
    color: #fff;
    font-weight: bold;
    display: block;
}
.active{
    background-color: #8549ee;
}

</style>