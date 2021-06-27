<template>
    <div class="create-user-panel">
        <h1 class="heading heading-primary">Edit User</h1>
        <div class="form-wrapper">
            <form novalidate>
                <div class="form-group">
                    <input type="text" placeholder="Full Name" class="form-element" v-model="form.name">
                </div>
                <div class="form-group">
                    <select name="role" v-model="form.role" class="form-element">
                        <option value="" disabled>--user-role--</option>
                        <option value="admin">Admin</option>
                        <option value="employee">Employee</option> 
                    </select>
                </div>
                <div class="form-group">
                    <input type="text" class="form-element" placeholder="Username" v-model="user.username" disabled>
                </div>
                <div class="form-group">
                    <input type="password" class="form-element" placeholder="Change password" v-model="form.password">
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
            this.$emit('save-user', form);
        },
        cancel(){
            this.$emit('cancel');
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
</style>