<template>
    <div class="btn add-btn" @click.prevent="click">
        <i class="fas fa-plus"></i>
    </div>
</template>
<script>
export default {
    name: 'AddButton',
    methods: {
        click(){
            this.$emit('btn-click');
        }
    }
}
</script>
<style scoped>
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

.add-btn:hover, 
.add-btn:active{
    color: #000;
}
</style>