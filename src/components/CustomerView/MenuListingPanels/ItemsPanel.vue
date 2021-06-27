<template>
        <div class="panel">
            <div class="menu-list">
                <MenuItem v-for="item in menu.menuItems" :key="item._id" :menuItem="item"/>
            </div>

        </div>

</template>
<script>
import MenuItem from './MenuItem.vue';
export default {
    name: 'ItemsPanel',
    components: {
        MenuItem
    },
    props: {
        menu: {
            default: function(){
                return {
                    name: ''
                }
            }
        }
    }
}
</script>
<style scoped>
.panel{
    flex-basis: auto;
    background-color: #f8f8f8;
    padding: 1em;
    height: 100%;
    overflow-y: scroll;
    left: 20%;
}
.menu-list{
    display: flex;
    flex-direction: column;
    align-items: center;
}
@media (min-width: 900px) {
    .panel{
        padding: 2em;
        width: 100%;
    }
}
</style>