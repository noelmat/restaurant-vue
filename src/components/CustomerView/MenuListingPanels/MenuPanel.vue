<template>
    <div class="panel">
        <ul class="list-unstyled menu-list">
            <li class="list-item" v-for="(menu, index) in menus" :key="menu._id">
                <a href="" class="link-unstyled menu-name" :class="{'active': index===selected}" @click.prevent="showMenu(index, menu)">
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
                return {
                }
            }
        }
    },
    data(){
        return {
            selected: ''
        }
    },
    methods: {
        showMenu(index){
            this.selected = index;
            this.$emit('show-menu', index);
        }
    }
}
</script>
<style scoped>
.panel{
    display: flex;
    background-color: #f8f8f8;
    overflow-x: auto;
    /* padding-top:4em; */
    flex-basis: 23%; 
}

.panel::-webkit-scrollbar{
    display: none;
}

.menu-list{
    display: flex;
    align-items: flex-end;
}
.list-item{
    margin: 0;
    padding: 0;
}
.menu-name{
    display: block;
    padding: 1em 2em;
    color: #fc8019;
    font-size: 1.1em;
    padding: 1em;
}
.active{
    border-bottom: 2px solid #fc8019;
}
@media (min-width: 900px) {
    .panel{
        flex-basis: 30%;
        flex-direction: column;
        background-color: #fc8019;
        max-width: 250px;
        height: 100%;
        width: 20%
    }
    .list-item{
            padding-left: 4px;
    }
    .menu-list{
        margin-top: 5em;
        display: initial;

    }
    .menu-name{
        display: block;
        padding: 1em 2em;
        color: #fff;
        font-size: 1.1em;
        padding: 1em;
    }
    

    .active{
        background-color: #f8f8f8;
        color: #fc8019;
        border-bottom: 0;
    }
}

</style>