<template>
    <div class="top-panel">
        <!-- {{ $router.history.current.path }} -->
    </div>
</template>
<script>
export default {
    name: 'TopPanel',
    data(){
        return {
            showDropdown : false,
        }
    },
    methods:{
        toggleHamburger(){
            console.log('toggled');
        },
        toggleDropdown(){
            this.showDropdown = !this.showDropdown;
        }
    }
}
</script>
<style scoped>

.top-panel{
    background-color: #fff;
    display: flex;
    width: 100%;
    height: 7vh;
    box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.1);
}

.nav-list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.fa-bars{
    font-size: 1.4em;
}
.hamburger{
    padding: 1em 1em;
}

.user{
    display: flex;
    align-items: center;
    padding: 0 1em;
}
.fa-caret-down{
    font-size: 1.2em;
    padding: 1em;
}
.dropdown{
    position: absolute;
    background-color: #fff;
    width: 150px;
    border-radius: 5px;    
    box-shadow: 0 2px 3px 1px rgba(0,0,0,0.2);
    color: #999;
    padding: 1em 0;
    font-size: 0.9em;

}
.dropdown p{
    text-align: left;
    padding-left: 1.3em;
}

.dropdown-list{
    margin-top: 1em;
    padding: .5em 0;
}

.dropdown-item{
    display: flex;
    padding: 4px 0;
}
.dropdown-item > a{
    color: #999;
    width: 100%;
}
.dropdown-item > a:hover{
    color: #673AB7;
    width: 100%;
}
.dropdown-item:hover{
    background-color: #f8f8f8;
}

</style>