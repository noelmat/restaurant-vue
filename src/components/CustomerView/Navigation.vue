<template>
    <nav>
        <a href="" class="hamburger floating-item" @click.prevent="toggleMenu"><i class="fas fa-bars"></i></a>
        
        <ul class="nav container list-unstyled" :class="{'opacity-1': atTop, 'showMenuMobile': showMenuMobile}">
            <li><a href="#home" v-scroll-to="'#home'" class="link-unstyled nav-item">Home</a></li>
            <li><a href="#menu" v-scroll-to="'#menu'" class="link-unstyled nav-item">Menu</a></li>
            <li><a href="#menu" v-scroll-to="'#contact'" class="link-unstyled nav-item">Contact Us</a></li>
            <li><router-link :to="{name: 'customer-login'}" class="link-unstyled nav-item nav-cta">Login</router-link></li>
            <li><router-link :to="{name: 'cart'}" class="link-unstyled nav-item cart"><i class="fas fa-shopping-cart"></i><span class="cart-count">{{cartLength}}</span></router-link></li>
        </ul>

        <router-link :to="{name: 'cart'}" class="link-unstyled cart cart-mobile floating-item"><i class="fas fa-shopping-cart"></i><span class="cart-count">{{cartLength}}</span></router-link>
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
            atTop: true,
            showMenuMobile: false,
        }
    },
    methods:{
        handleScroll(){
            if(window.scrollY < 300){
                this.atTop = true;
            }else{
                this.atTop = false;
            }
        },
        toggleMenu(){
            this.showMenuMobile = !this.showMenuMobile;
        }
    },
    computed:{
        cartLength(){
            return this.$store.getters.cartLength;
        }
        
    }
}
</script>
<style scoped>

.nav{
    position: fixed;
    display: flex;
    background-color: #fff;
    flex-direction: column;
    height: 100vh;
    width: 50%;
    justify-content: center;
    z-index: 99;
    margin-left: -50%;    
    transition: margin .3s ease-out;
}
.showMenuMobile{
    margin-left: 0;
    box-shadow: 4px 0 5px 1px rgba(0,0,0,0.2);

}
.nav li{
    display: flex;
}
.nav-item{
    padding: 1em;
    font-size: 1.2em;
    color: #333;
    width: 100%;
    padding-left: 2em;
}
.cart{
    position: relative;
}
.cart-count{
    font-size: .8em;
    position: absolute;
    background-color: #fc8019;
    border-radius: 50%;
    padding: 2px 7px ;
    top: 0px;
    color: #fff;
}

.floating-item{
    position: fixed;
    z-index: 100;
    padding: .5em .6em;
    background-color: #fff;
    border-radius: 50%;

}
.hamburger{
    top: 3%;
    left: 5%;
    font-size: 1em;
    color: #333;
}
.cart-mobile{
    top: 3%;
    right: 5%;
    padding: .5em;
}
@media (min-width: 600px) {
    .nav-item:hover{
        background-color: #eee;
    }
    .nav li{
        font-size: 1.5em;
    }
    .floating-item{
        font-size: 1.2em;
    }
    /* .nav{
        flex-direction: row;
        margin: 0;
        width: 100%;
        align-items: center;
        justify-content: flex-end;
        height: 70px;
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
    .cart{
        position: relative;
    }
    .cart-count{
        font-size: .8em;
        position: absolute;
        background-color: #fc8019;
        border-radius: 50%;
        padding: 2px 7px ;
        top: 0px;
    } */
}

</style>