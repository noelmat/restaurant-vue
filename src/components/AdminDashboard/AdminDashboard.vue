<template>
    <div id='dashboard'>
        <SidePanel/>
        <MainPanel/>
    </div>
</template>
<script>
import MainPanel from '@/components/AdminDashboard/MainPanel/MainPanel';
import SidePanel from '@/components/AdminDashboard/SidePanel/SidePanel';

export default {
    name: 'AdminDashboard',
    title: 'Restaurant Dashboard',
    components: {
        MainPanel,
        SidePanel
    }
}
</script>
<style scoped>
#dashboard{
    display: flex;
    flex-direction: row;
}
</style>