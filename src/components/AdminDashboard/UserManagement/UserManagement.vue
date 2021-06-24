<template>
    <div class="usermanagement">
        <h2 class="heading heading-secondary">Admin Users</h2>
        <div class="user-panel">
            <UserCard v-for="user in adminUsers"  :key="user._id" :user="user" @user-updated='fetchUsers'/>
        </div>
        <h2 class="heading heading-secondary" v-if="employeeUsers.length !== 0">Employees</h2>
        <div class="user-panel">
            <UserCard v-for="user in employeeUsers"  :key="user.id" :user="user"/>
        </div>
        <a class="link-unstyled btn add-btn" @click.prevent="createUser">
            <i class="fas fa-plus"></i>
        </a>
        <ModalComponent v-if="addUser"><AddNewUser @save-user='saveUser' @cancel="cancelAddUser"/></ModalComponent>

    </div>
</template>
<script>
import {postUser, getUsers} from '@/services/admin/users';
import UserCard from './UserCard/UserCard';
import AddNewUser from './AddNewUser.vue';
export default {
    name: 'UserManagement',
    components: {
        UserCard,
        AddNewUser
    },
    data(){
        return {
           users : [],
           addUser: false,
        }
    },
    created(){
        getUsers()
            .then(users => {
                this.users.push(...users);
            })
    },
    computed:{
        adminUsers(){
            return this.users.filter(user => user.role === 'admin');
        },
        employeeUsers(){
            return this.users.filter(user => user.role === 'employee');
        }
    },
    methods:{
      
        createUser(){
            this.addUser=true
        },
        saveUser(event){
            postUser(event)
                .then(()=> {
                    console.log('User Registered')
                })
        },
        cancelAddUser(){
            this.addUser = false;
        },
        fetchUsers(){
            getUsers()
            .then(users => {
                this.users = [];
                this.users.push(...users);
            })
        }

    }
}
</script>
<style scoped>
.usermanagement{
    margin:2em 3em 0 4.5em;
}
.user-panel{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.add-btn{
    position: fixed;
    right: 30px;
    bottom: 30px;
    background-color: #fff;
    padding: .8em .9em;
    border-radius:100%;
    font-size: 1.3em;
    box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}
.heading{
    margin-left: 5px;
    margin-bottom: 1.6em;
}
.add-btn:hover, 
.add-btn:active{
    color: #000;
}
.create-menu{
    position: fixed;
    bottom: 100px;
    right: 50px;
    background-color: #fff;
    border-radius: 10px;
    /* padding: 1em 0; */
    box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.2);
}
.menu-list{
    display: flex;
    flex-direction: column;

}
.menu-item{
    padding: .5em 1em;
    width: 100%;
}
.menu-item:hover{
    background-color: rgba(170, 170, 170, 0.535);
    color: #fff;
}
.menu-item:hover:first-of-type{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

}
.menu-item:hover:last-of-type{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
</style>