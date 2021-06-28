<template>
    <div class="mainpanel">
        <TopPanel/>
        <ContentPanel/>
    </div>
</template>
<script>
import TopPanel from './TopPanel/TopPanel';
import ContentPanel from './ContentPanel/ContentPanel';

export default {
    name: 'MainPanel',
    components: {
        TopPanel,
        ContentPanel,
    }
}
</script>
<style scoped>
.mainpanel{
    width: 100%;
    background-color: #F8F8FC;
    display: flex;
    flex-direction: column;
    margin-left: 70px;
}
@media (min-width: 900px) {
    .mainpanel{
        margin-left: 230px;
    }
}

</style>