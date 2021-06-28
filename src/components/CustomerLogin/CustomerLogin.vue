<template>
    <div class="page">

    <div class='wrapper'>
        <h1 class="heading ">
            Customer Login
        </h1>
        <form class="form">
            <div class="form-group">
                <input type="text" class="form-element" placeholder="Email" v-model="form.email">
            </div>
            <div class="form-group">
                <input type="password" class="form-element" placeholder="Password" v-model="form.password">
            </div>
            <div class="form-group">
                <a href="" class="link-unstyled btn btn-login" @click.prevent="login"> Login </a>
            </div>
        </form>
    </div>
    </div>
</template>
<script>
export default {
    name: 'CustomerLogin',
    data(){
        return {
            form: {
                email: '',
                password: ''
            },
            isCheckout: false
        }
    },  
    created(){
        if(this.$route.query !== undefined && this.$route.query.checkout){
            this.isCheckout = true;
        }
    },

    methods:{
        login(){
            this.$store.dispatch({
                type: 'customerLogin',
                credentials: this.form
            })
            .then(()=>{
                if(this.isCheckout){
                    this.$router.push({name: 'order', params: {...this.$route.params}});
                }else{
                    this.$router.push({name: 'customer-home'})
                }
                this.$toast.success(`Logged in successfully`)
            })
            .catch(err=> {
                this.$toast.error(`${err.message}`);
            })
        }
    }
}
</script>
<style scoped>
.page{
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
}

.wrapper {
    padding: 2em;
    box-shadow: 0 1px 4px 1px rgba(0,0,0,0.2);
    border-radius: 10px;
    background-color:#fff;
    display: flex;
    flex-direction: column;
}
.heading{
    color: #333;
    padding: 0;
    margin: 0;
    margin-bottom: .5em;
    font-size: 1.7em;
}
.form{

}
.form-group{
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.form-element{
    padding: .8em;
    border-radius: 3px;
    border: 0;
    font-size: 1.1em;
    border: 1px solid #333;
}
.form-element:focus-visible{
    outline: 0;
}

.validation{
    font-size: .7em;
    color: #f79483;
    margin-left: 1em;
}
.error{
    border: 1px solid #f79483;
    box-shadow: 0 0 1px 1px rgba(220, 20, 60, 0.1);
}
.btn-login{
    color: #fff;
    background: green;
    text-align: center;
}

</style>