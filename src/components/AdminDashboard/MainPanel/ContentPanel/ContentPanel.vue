<template>
    <div class="content-panel">
        <router-view></router-view>
        <!-- <AddNewUser/> -->
        <!-- <UserManagement/> -->
        <!-- <RestaurantManagement/> -->
        <!-- <MenuView/> -->
    </div>    
</template>
<script>
// import AddNewUser from '@/components/AdminDashboard/UserManagement/AddNewUser';
// import UserManagement from '@/components/AdminDashboard/UserManagement/UserManagement';
// import RestaurantManagement from '@/components/AdminDashboard/RestaurantManagement/RestaurantManagement';
// import MenuView from '@/components/AdminDashboard/RestaurantManagement/MenuView/MenuView';

export default {
  components: { 
    //   UserManagement 
    // RestaurantManagement 
    // MenuView
},  
name: 'ContentPanel',

}
</script>
<style scoped>
.content-panel{
    /* background-color: #fff; */
    /* margin: 0.8em; */
    flex-basis: 93%;
    min-height: 93vh
    /* border-radius: 5px;  */
    /* box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1); */
}
</style>