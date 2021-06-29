<template>
    <div class="page">

    <div class='wrapper'>
        <h1 class="heading ">
            Customer Login
        </h1>
        <form class="form">
            <div class="form-group">
                <input type="text" id="email" class="form-element" placeholder="Email" v-model="form.email" :class="{'error': $v.form.email.$error}" @blur="$v.form.email.$touch()" @keyup.enter="login">
                <div class="validation" v-if="$v.form.email.$error">
                    Field required
                </div>

            </div>
            <div class="form-group">
                <input type="password" class="form-element" placeholder="Password" :class="{'error': $v.form.password.$error}" v-model="form.password" @blur="$v.form.password.$touch()" @keyup.enter="login">
                <div class="validation" v-if="$v.form.password.$error">
                    Field required
                </div>

            </div>
            <div class="form-group">
                <a href="" id="submit" class="link-unstyled btn btn-login" :class="{'disabled': loading}" @click.prevent="login"> {{loading?"Logging In":"Login"}} </a>
            </div>
            <div class="register">
                New User? <a href="" @click.prevent="register" >Register</a>
            </div>
        </form>
    </div>
    </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators';

export default {
    name: 'CustomerLogin',
    title: 'Customer Login',
    data(){
        return {
            form: {
                email: '',
                password: ''
            },
            isCheckout: false,
            loading: false
        }
    },  
    validations: {
        form: {
            email: {
                required,
            },
            password: {
                required
            }
        }
    },

    created(){
        if(this.$route.query !== undefined && this.$route.query.checkout){
            this.isCheckout = true;
        }
    },

    methods:{
        register(){
            if(this.isCheckout){
                this.$router.push({name: 'customer-registration', params: {...this.$route.params}, query: {...this.$route.query}});
            }else{
                this.$router.push({name: 'customer-registration'})
            }
        },
        login(){
            this.$v.form.$touch()

            if(!this.$v.form.$invalid && !this.loading){
                this.loading = true;
                this.$store.dispatch({
                    type: 'customerLogin',
                    credentials: this.form
                })
                .then(()=>{
                    this.loading = false;
                    if(this.isCheckout){
                        this.$router.push({name: 'order', params: {...this.$route.params}});
                    }else{
                        this.$router.push({name: 'customer-home'})
                    }
                    this.$toast.success(`Logged in successfully`)
                })
                .catch(err=> {
                    this.loading = false;
                    this.$toast.error(`${err.message}`);
                })
            }else{
                this.$toast.error("Please fill the fields correctly")
            }
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
    border: 0;
    outline: solid 1px #fc8019 ;
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
    background-color: #fc8019;
    text-align: center;
}
.register{
    text-align: right;

}
.disabled{
    background-color: #aaa;
}
</style>