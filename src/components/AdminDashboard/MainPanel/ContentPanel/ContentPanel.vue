<template>
    <div class="content-panel">
        <modal-component v-if="showConfirm"><confirm-box message="Do you want to log out?" buttonText="Logout" @cancel="cancelLogout" @confirm="logout"/></modal-component>
        <router-view></router-view>
    </div>    
</template>
<script>

export default {
    name: 'ContentPanel',
    methods:{ 
        logout(){
            this.$store.dispatch({
                type: 'logout'
            }).then(()=> {
                this.cancelLogout();
                this.$router.push({name: 'admin-login'})
            }).catch(err=>{
                this.$toast.error(`${err.message} while logging out`)
            })
        },
        cancelLogout(){
            this.$store.dispatch({
                type: 'confirmLogout',
                confirmLogout: false
            })
        }
    },
    computed:{
        showConfirm(){
            return this.$store.state.authentication.confirmLogout;
        }
    }
}
</script>
<style scoped>
.content-panel{
    flex-basis: 93%;
    min-height: 93vh;
    background-color: #F1F0F0;
}
</style>