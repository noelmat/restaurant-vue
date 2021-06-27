<template>
    <div class="mainpanel">
        <TopPanel/>
        <ContentPanel/>
        <!-- <ModalComponent/> -->
    </div>
</template>
<script>
import TopPanel from './TopPanel/TopPanel';
import ContentPanel from './ContentPanel/ContentPanel';
// import ModalComponent from '../../ModalComponent/ModalComponent.vue';

export default {
    name: 'MainPanel',
    components: {
        TopPanel,
        ContentPanel,
        // ModalComponent
    }
}
</script>
<style scoped>
.mainpanel{
    width: 100%;
    background-color: #F8F8FC;
    display: flex;
    flex-direction: column;
    /* position: fixed; */
    margin-left: 70px;
    /* font-size: em; */
}
@media (min-width: 900px) {
    .mainpanel{
        margin-left: 230px;
    }
}

</style>