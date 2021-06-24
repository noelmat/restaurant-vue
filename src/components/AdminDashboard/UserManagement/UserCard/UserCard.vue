<template>
    <div class="card">
        <a href="#" @click.prevent="editUser" class="btn-edit">
            <i class="fas fa-edit"></i>Edit
        </a> 
        <div class="card-details">
            <div class="user-details">
                <div class="name">
                    {{user.name}}
                </div>
                <img src="@/assets/user-icon.png" alt="" width="100%">
                <div class="designation">
                    {{user.role}}
                </div>
            </div>
            <div class="login-details">
                <div class="username login-detail">
                    <i class="fas fa-user"></i> 
                        <span>{{user.username}}</span>
                </div>
                <div class="password login-detail">
                    <i class="fas fa-lock"></i> <span class="card-line">&#9913;&#9913;&#9913;&#9913;&#9913;&#9913;&#9913;&#9913;</span>
                </div>
            </div>
        </div>     
        <ModalComponent v-if="edit"><EditUser :user='user' @save-user='saveChanges' @cancel="cancel"/></ModalComponent>

    </div>
</template>
<script>
import {updateUserDetails} from '@/services/admin/users.js';
import EditUser from './EditUser.vue'
export default {
    name: 'UserCard',
    components: {
        EditUser
    },
    props: [
        'user'
    ],
    data(){
        return {
            edit: false
        }
    },
    computed: {
    },
    methods: {
        editUser(){
            this.edit = true;
        },
        cancel(){
            this.edit = false;
        },
        selectFile(){
            console.log('Clicked');
        },
        saveChanges(event){
            console.log(event)
            updateUserDetails(this.user._id, event)
            .then(()=>{
                this.$emit('user-updated');
                this.edit = false;
            })
            .catch(()=>{
                
            })
        }
    }
}
</script>
<style scoped>
.card{
    position: relative;
    padding: 1em 4em;
    flex-basis: 30%;
    max-width: 280px;
    min-width: 250px;
    background-color: #fff;
    border-radius: 5px;
    margin-right: 3.33%;
    margin-bottom: 2em;
    box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
}
.btn-edit{
    position: absolute;
    right: 1.1em;
    font-size: 0.9em;
    color: #673AB7;
}
.card-details{
    padding: 2.2em 0 1.2em;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.user-details{
    text-align: center;
    margin-bottom: 2em;
}
.user-detail span:focus{
    border-radius: 0;
    outline: 0;
    border-bottom: 1px solid #000;
}
.user-detail input{
    text-align: center;
    width: 120px ;
    padding: 0 .4em;
    font-size: 20px;
    border: 0;
    border-bottom: 1px solid #333;
}
.user-detail input:focus-visible{
    outline: 0;
}
.name{
    font-size: 20px;
    margin-bottom: 0.625em;
}

.designation{
    font-size: .75em;
    margin-top: 0.6em;
}

.login-details{
    font-size: 0.8em;
    min-width: 75%;
    max-width: 80%;
    margin: 0 auto;
}
.login-detail{
    width: 100%;
}
.login-detail span{
    margin-left: 1em;
}
.login-detail span:focus{
    border-radius: 0;
    outline: 0;
    border-bottom: 1px solid #000;
}

.password{
    font-size: 0.9em;
    font-weight: bold;
}
.button-panel{
    margin-top: 20px;
}

.button{
    /* padding: 0.5em ; */
    color: #673AB7;
    
    /* border-radius: 50%; */
    font-size: 2em;
}

.btn-create{
    background-color: #fff;
}
.btn-cancel{
    color: #aaa;
    /* background-color: #bbb; */
    margin-left:10px;
}
.img-upload-label{
    border-radius: 50%;
}
.img-upload-label img {
    border-radius: 50%;
}
.img-upload-label:hover{
    opacity: 0.5;
}
.img-upload-label p{
    position:relative;
    top: -80px;
    background-color: rgba(0, 0, 0, 0.57);
    color: #fff;
    width: fit-content;
    margin: 0 auto;
}
</style>