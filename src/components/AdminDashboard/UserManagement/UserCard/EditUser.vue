<template>
    <div class="create-user-panel">
        <h1 class="heading heading-primary">Edit User</h1>
        <div class="form-wrapper">
            <form novalidate>
                <div class="form-group">
                    <input type="text" placeholder="Full Name" class="form-element"  :class="{'error': $v.form.name.$error}" @blur="$v.form.name.$touch()" v-model="form.name">
                    <div class="validation" v-if="$v.form.name.$error">
                        Field required
                    </div>

                </div>

                <div class="form-group" >
                    <select name="role" :class="{'error': $v.form.role.$error}" v-model="form.role" @blur="$v.form.role.$touch()" class="form-element">
                        <option value="">--select-role--</option>
                        <option value="admin">Admin</option>
                        <option value="employee">Employee</option> 
                    </select>
                    <div class="validation" v-if="$v.form.role.$error">
                        Field required
                    </div>

                </div>
                <div class="form-group">
                    <input type="text" class="form-element" placeholder="Username" v-model="user.username" disabled>
                </div>
                <div class="form-group">
                    <input type="password" class="form-element" placeholder="Password" v-model="form.password" @blur="$v.form.password.$touch()" :class="{'error': $v.form.password.$error}">
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
                            
                <div class="btn-panel">
                    <a href="" class="link-unstyled btn-icon" @click.prevent='saveUser' title="save user">
                        <i class="far fa-check-circle"></i>
                    </a>
                    <a href="" class="link-unstyled btn-icon btn-cancel" @click.prevent='cancel' title="cancel user">
                        <i class="far fa-times-circle"></i>
                    </a>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { required, requiredIf, helpers } from 'vuelidate/lib/validators';

export default {
    name: 'AddEditUser',
    props: {
        user: {
            default : function(){
                return {}
            }
        }
    },
    data(){
        return {
            form: {
                name: '',
                username: '',
                password: '',
                role: '',
            }
        }
    },
    validations: {
        form: {
            name: {
                required,
            },
            password: {
                required: requiredIf('isOptional'),
                minLength: (value)=> !helpers.req(value) || value.length >= 8,
                containsUpperCase : (value) =>!helpers.req(value) ||  /[A-Z]/.test(value),
                containsLowerCase : (value) =>!helpers.req(value) ||  /[a-z]/.test(value),
                containsNumber : (value) =>!helpers.req(value) ||  /[0-9]/.test(value),
                containsSpecial : (value) =>!helpers.req(value) ||  /[#?!@$%^&*-]/.test(value)

            },
            role: {
                required,
                
            }
        }
    },
    computed:{
        isOptional(){
            return true
        }
    },
    created(){
        if(Object.keys(this.user).length !== 0){
            this.form.name = this.user.name
            this.form.password = ''
            this.form.role = this.user.role
        }
    },
    methods: {
        saveUser(){
            let form;
            if(!this.form.password){
                form = {
                    name: this.form.name,
                    role: this.form.role,
                }
            }else{
                form = {
                    ...this.form
                };
            }
            this.$v.form.name.$touch();
            this.$v.form.role.$touch();
            this.handlePasswordValidation();
            if(!this.$v.form.$invalid){
                this.$emit('save-user', form);
            }else{
                this.$toast.error("Please fill the fields correctly")
            }
        },
        cancel(){
            this.$emit('cancel');
        },
        handlePasswordValidation(){
            if(this.form.password){
                this.$v.form.password.$touch();
            }
        }
    }
}
</script>
<style scoped>
.create-user-panel{
    padding: 1em;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    font-size: .9em;
}
.form-group{
    display: flex;
    flex-direction: column;
}
.form-element{
    padding: 1rem 1rem;
    font-size: 1.2em;
    border: 0 solid #999;
    display: flex;
    justify-content: space-between;
}

@media (min-width: 900px) {
   .create-user-panel{
       padding: 2em;
    } 
}
label{
    font-size: .8em;
}
.form-element:focus{
    outline: 0;
    
}
input{
    border-bottom: 1px solid #000;
}
.btn-panel{
    margin: 1em 0 0;
}
.btn-icon{
    border-radius: 50%;
    font-size: 2em;
    padding: 0 .5em;
}
.btn-icon:hover{
    color: #673AB7
}
.btn-cancel:hover{
    color: crimson;
}
.validation{
    font-size: .7em;
    color: crimson;
    margin-left: 2em;
    text-align: left;
    padding: .5em 0;
}
.error{
    border-bottom: 1px solid crimson;
    /* border-radius: 5px; */
}
</style>