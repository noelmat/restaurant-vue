<template>
        <div class="panel">
            <ul class="list-unstyled">
                <li class="list-item" v-for="menu in menus" :key="menu._id">
                    <a href="" class="link-unstyled menu-name" @click.prevent="showMenu(menu)">
                        {{menu.name}}
                    </a>
                </li>
            </ul>
        </div>
</template>
<script>
export default {
    name: 'MenuPanel',
    props: {
        menus: {
            default: function(){
                return {}
            }
        }
    },
    methods: {
        showMenu(menu){
            this.$emit('show-menu', menu);
        }
    }
}
</script>
<style scoped>
.panel{
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    background-color: #333;
    position: absolute;
    height: 100%;
    width: 20%
}
.list-item a{
    display: block;
    padding: 1em 2em;
    color: #fff;
}
.menu-name{
    font-size: 1.1em;
    padding: 1em;
}
</style>