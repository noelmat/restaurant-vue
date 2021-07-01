<template>
    <div class="page">

    <div class='wrapper'>

        <form class="form">
            <div class="registration-details">
                <h1 class="heading ">
                    Customer Registration
                </h1>
                <div class="form-group">
                    <input type="text" id="name" class="form-element" placeholder="Name" v-model="form.name" :class="{'error': $v.form.name.$error}" @blur="$v.form.name.$touch()" @keyup.enter="login">
                    <div class="validation" v-if="$v.form.name.$error">
                        Field required
                    </div>

                </div>
                <div class="form-group">
                    <input type="text" id="email" class="form-element" placeholder="Email" v-model="form.email" :class="{'error': $v.form.email.$error}" @blur="$v.form.email.$touch()" @keyup.enter="login">
                    <div class="validation" v-if="$v.form.email.$error">
                        <template v-if="!$v.form.email.required">
                            Field required
                        </template>
                        <template v-else-if="!$v.form.email.email">
                            Not a valid email
                        </template>
                    </div>

                </div>
                <div class="form-group">
                    <input type="text" id="primaryContact" class="form-element" placeholder="Contact Number" v-model="form.primaryContact" :class="{'error': $v.form.primaryContact.$error}" @blur="$v.form.primaryContact.$touch()" @keyup.enter="login">
                    <div class="validation" v-if="$v.form.primaryContact.$error">
                        Field required
                    </div>
                </div>
                <div class="form-group">
                    <input type="password" class="form-element" placeholder="Password" :class="{'error': $v.form.password.$error}" v-model="form.password" @blur="$v.form.password.$touch()" @keyup.enter="login">
                    <div class="validation" v-if="$v.form.password.$error">
                        <template v-if="!$v.form.password.required">
                            Field required
                        </template>
                        <template v-else-if="!$v.form.password.minLength">
                            Minimum 8 characters required
                        </template>
                        <template v-else-if='!$v.form.password.containsUpperCase'>
                            One uppercase letter required
                        </template>
                        <template v-else-if='!$v.form.password.containsLowerCase'>
                            One lowercase letter required
                        </template>
                        <template v-else-if='!$v.form.password.containsNumber'>
                            One number required
                        </template>
                        <template v-else-if='!$v.form.password.containsSpecial'>
                            One special character required except '_'
                        </template>
                    </div>
                </div>
                <div class="form-group">
                    <input type="password" class="form-element" placeholder="Confirm Password" :class="{'error': $v.form.confirmPassword.$error}" v-model="form.confirmPassword" @blur="$v.form.confirmPassword.$touch()" @keyup.enter="login">
                    <div class="validation" v-if="$v.form.confirmPassword.$error">
                        Passwords do not match
                    </div>
                </div>
            </div>
            <div class="address-details">
                <h2>Address</h2>
                <div class="form-group">
                    <input type="text" class="form-element" name="addressLine1" id="addressLine1" placeholder="Address Line 1" v-model="form.address.addressLine1" :class="{'error': $v.form.address.addressLine1.$error}" @blur="$v.form.address.addressLine1.$touch()" >
                    <div class="validation" v-if="$v.form.address.addressLine1.$error">
                        Field required
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-element" name="addressLine2" id="addressLine2" placeholder="Address Line 2" v-model="form.address.addressLine2" :class="{'error': $v.form.address.addressLine2.$error}" @blur="$v.form.address.addressLine2.$touch()">
                    <div class="validation" v-if="$v.form.address.addressLine2.$error">
                        Field required
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-element form-element-half" name="city" id="city" placeholder="City Name" v-model="form.address.city" :class="{'error': $v.form.address.city.$error}" @blur="$v.form.address.city.$touch()"> 
                    <div class="validation" v-if="$v.form.address.city.$error">
                        Field required
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-element form-element-half" name="landmark" id="landmark" placeholder="Landmark" v-model="form.address.landmark" :class="{'error': $v.form.address.landmark.$error}" @blur="$v.form.address.landmark.$touch()"> 
                    <div class="validation" v-if="$v.form.address.landmark.$error">
                        Field required
                    </div>
                </div>
                 <div class="form-group">
                    <input type="text" class="form-element form-element-half" name="Contact" id="Contact" placeholder="Contact" v-model="form.address.primaryContact" :class="{'error': $v.form.address.primaryContact.$error}" @blur="$v.form.address.primaryContact.$touch()"> 
                    <div class="validation" v-if="$v.form.address.primaryContact.$error">
                        Field required
                    </div>
                </div>
            </div>
        </form>
        <div class="form-group">
            <a href="" id="submit" class="link-unstyled btn btn-cta" :class="{'disabled': loading}" @click.prevent="register"> {{loading?"Processing":"Register"}} </a>
        </div>

    </div>
    </div>
</template>
<script>
import { required, sameAs, minLength, email } from 'vuelidate/lib/validators';
import { register } from '@/services/customer/auth';
export default {
    name: 'CustomerRegistration',
    title: 'Customer Registration',
    data(){
        return {
            form: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                primaryContact: '', 
                address: {
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    landmark: '',
                    primaryContact: ''
                }
            },
            isCheckout: false,
            loading: false
        }
    },  
    validations: {
        form: {
            name: {
                required
            },
            email: {
                required,
                email,
            },
            password: {
                required,
                minLength: minLength(8),
                containsUpperCase : (value) => /[A-Z]/.test(value),
                containsLowerCase : (value) => /[a-z]/.test(value),
                containsNumber : (value) => /[0-9]/.test(value),
                containsSpecial : (value) => /[#?!@$%^&*-]/.test(value)
            },
            confirmPassword:{
                sameAsPassword: sameAs('password'),
            },
            primaryContact: {
                required,
            },
            address: {
                addressLine1: {
                    required,
                },
                addressLine2: {
                    required,
                },
                city: {
                    required,
                },
                landmark: {
                    required,
                },
                primaryContact: {
                    required,
                }
                
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
            this.$v.form.$touch()

            if(!this.$v.form.$invalid && !this.loading){
                this.loading = true;
                const self = this;
                register(this.form)
                    .then(()=>{
                        return self.$store.dispatch({
                            type: 'customerLogin',
                            credentials: { email: this.form.email, password: this.form.password}
                        })
                    })                   
                    .then(()=>{
                        self.loading = false;
                        if(self.isCheckout){
                            self.$router.push({name: 'order', params: {...self.$route.params}});
                        }else{
                            self.$router.push({name: 'customer-home'})
                        }
                        self.$toast.success(`Logged in successfully`)
                    })
                    .catch(err=> {
                        self.loading = false;
                        self.$toast.error(`${err.message}`);
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
    background-color: #333;
}

.wrapper {
    padding: 2em;
    box-shadow: 0 1px 4px 1px rgba(0,0,0,0.2);
    border-radius: 3px;
    background-color:#fff;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}
.form{
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}
.heading{
    color: #333;
    padding: 0;
    margin: 0;
    margin-bottom: .5em;
    font-size: 1.7em;
}
.form-group{
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* width: 100%; */
    padding: 1px;
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
.btn-cta{
    color: #fff;
    background-color: #fc8019;
    text-align: center;
}
.disabled{
    background-color: #aaa;
}
@media (min-width:700px) {
    .page{
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .form{
        flex-direction: row;
        justify-content: center;
        align-items: flex-end
    }
    .registration-details{
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 3px;
        background-color: #f1f0f0;
        padding: 2em ;
    }
    .address-details{
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 3px;
        background-color: #f1f0f0;
        padding: 2em ;
        margin-left: 1em;
    }
    
}
</style>