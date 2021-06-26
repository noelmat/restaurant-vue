<template>
    <div class='wrapper'>
        <h1 class="heading ">
            Restaurant Login
        </h1>
        <form class="form">
            <div class="form-group">
                <input type="text" class="form-element" placeholder="Username" v-model="form.username">
            </div>
            <div class="form-group">
                <input type="password" class="form-element" placeholder="Password" v-model="form.password">
            </div>
            <div class="form-group">
                <a href="" class="link-unstyled btn btn-login" @click.prevent="login"> Login </a>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'RestaurantLogin',
    data(){
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods:{
        login(){
            this.$store.dispatch({
                type: 'login',
                credentials: this.form
            })
            .then(()=>{
                this.$router.push({name: 'dashboard-home'})
            })
            .catch(err=> {
                console.log(err);
            })
        }
    }
}
</script>
<style scoped>
.wrapper {
    padding: 1em 4em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 1px 4px 1px rgba(0,0,0,0.2);
    border-radius: 10px;
    background-color:#673AB7;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.heading{
    color: #fff;
}
.form{

}
.form-group{
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
}
.form-element{
    padding: .8em;
    border-radius: 10px;
    border: 0;
    font-size: 1.1em;
}
.form-element:focus-visible{
    outline: 0;
}
.btn-login{
    color: #fff;
    background: green;
}
</style>