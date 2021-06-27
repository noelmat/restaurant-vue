<template>
    <div class="backdrop">
        <slot></slot>
    </div>    
</template>
<script>
export default {
    name: 'ModalComponent'
}
</script>
<style scoped>
.backdrop{
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    position: fixed;
    z-index: 1000;
    height: 100vh;
    width: calc(100vw - 70px);
    left: 70px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media (min-width: 900px) {
    .backdrop{
        left: 230px;
        width: calc(100vw - 230px);

    }
}

</style>