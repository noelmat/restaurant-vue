<template>
    <div class="page">
        <div class='wrapper'>
            <h1 class="heading ">
                Restaurant Login
            </h1>
            <form class="form" novalidate>
                <div class="form-group">
                    <input type="text" id="username" class="form-element" placeholder="Username" :class="{'error': $v.form.username.$error}"  v-model="form.username" @blur="$v.form.username.$touch()" @keyup.enter="login">
                    <div class="validation" v-if="$v.form.username.$error">
                        Field required
                    </div>
                </div>
                <div class="form-group">
                    <input type="password" id="password" class="form-element" :class="{'error': $v.form.password.$error}" placeholder="Password" v-model="form.password" @blur="$v.form.password.$touch" @keyup.enter="login">
                    <div class="validation" v-if="$v.form.password.$error">
                        Field required
                    </div>
                </div>
                <div class="form-group">
                    <a href="" id="submit" class="link-unstyled btn btn-login" @click.prevent="login"> Login </a>
                </div>
            </form>
        </div>
    </div>
    
</template>
<script>
import { required } from 'vuelidate/lib/validators';
import {activeOrders} from '@/services/eventSource/activeOrders';

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
    validations: {
        form: {
            username: {
                required,
            },
            password: {
                required
            }
        }
    },
    methods:{
        login(){
            this.$v.form.$touch()
            if(!this.$v.form.$invalid){
                this.$store.dispatch({
                        type: 'login',
                        credentials: this.form
                    })
                    .then(()=>{
                        this.$router.push({name: 'dashboard-orders'});
                        this.$toast.success('Logged in as Admin');
                        activeOrders();
                    })
                    .catch(err=> {
                        this.$toast.error(`${err.message} occured`);
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
.validation{
    font-size: .7em;
    color: #f79483;
    margin-left: 1em;
}
.form-element{
    padding: .8em;
    border-radius: 10px;
    border: 0;
    font-size: 1.1em;
    border: 1px solid #333;
}
.form-element:focus-visible{
    outline: 0;
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