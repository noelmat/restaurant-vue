<template>
    <nav>
        <ul class="nav container list-unstyled" :class="{'opacity-1': atTop}">
            <li><a href="#home" v-scroll-to="'#home'" class="link-unstyled nav-item">Home</a></li>
            <li><a href="#menu" v-scroll-to="'#menu'" class="link-unstyled nav-item">Menu</a></li>
            <li><a href="" class="link-unstyled nav-item">Contact Us</a></li>
            <li><router-link :to="{name: 'customer-login'}" class="link-unstyled nav-item nav-cta">Login</router-link></li>
            <li><router-link :to="{name: 'cart'}" class="link-unstyled nav-item"><i class="fas fa-shopping-cart"></i></router-link></li>
        </ul>
    </nav>    
</template>
<script>
export default {
    name: 'Navigation',
    created(){
        window.addEventListener('scroll', this.handleScroll);
    },
    data(){
        return {
            atTop: true
        }
    },
    methods:{
        handleScroll(){
            if(window.scrollY < 300){
                this.atTop = true;
            }else{
                this.atTop = false;
            }
        }
    }
}
</script>
<style scoped>
.nav{
    position: fixed;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    height: 70px;
    /* background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0)); */
    padding-right: 3em;
    z-index: 10;
    opacity: .6;
    transition: opacity .2s ease-in-out;
    background-color: #fff;

}
.opacity-1{
    opacity: 1;
    background-color:unset;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0));

}
.nav:hover{
    opacity: 1;
}

.nav-item{
    padding: 1em;
    margin: 1em;
    font-size: 1.2em;
    color: #333;
}
.nav-item:hover{
    border-bottom: 2px solid #fc8019;
}
.nav-cta{
    background-color: #fff;
    padding: .3em 1em;
    border-radius: 5px;
    color: #333;
}
.nav-cta:hover{
    border-bottom: 0;
    background-color: #fc8019;
    color: #fff;
    /* border: 1px solid #fff; */
}
.nav:hover .nav-item{
    color: #333;
}
.nav:hover .nav-cta{
    background-color: #333;
    color: #fff;
}
.nav:hover .nav-cta:hover{
    background-color: #fc8019;
    color: #fff;
}
.opacity-1 .nav-item{
    color: #fff;
}
.opacity-1 .nav-cta{
    color: #333;
}
.opacity-1:hover .nav-item{
    color: #fff;
}
.opacity-1:hover .nav-cta{
    background-color: #fff;
    color: #333;
}
</style>