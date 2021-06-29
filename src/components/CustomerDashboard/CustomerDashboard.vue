<template>
    <div id='dashboard'>
        <SidePanel/>
        <MainPanel/>
    </div>
</template>
<script>
import MainPanel from './MainPanel/MainPanel';
import SidePanel from './SidePanel/SidePanel';

export default {
    name: 'CustomerDashboard',
    title: 'Customer Dashboard',
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