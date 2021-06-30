<template>
    <div class="page">
        <div class="message">
            Sorry. This is going no where. Let start again <router-link :to="{name: 'home'}" class="link">Go Back</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PageNotFound',
    title: 'Page Not Found'
}
</script>
<style scoped>
.page{
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f0f0;
}
.message{
    color: #333;
    font-size: 1.2em;
}
.link{
    color: #fc8019;
}
</style>