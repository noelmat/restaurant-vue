<template>
    <header>
        <div class="cta">
            hungry? <a href=""  v-scroll-to="'#menu'" class="link-unstyled btn btn-cta">Order Now</a>
        </div>
    </header>
</template>
<script>
export default {
    name: "Header"
}
</script>
<style scoped>
header{
    height: 100vh;
    background-image: radial-gradient(circle, rgba(0,0,0,0.5368522408963585) 0%, rgba(0,0,0,0.4416141456582633) 36%, rgba(0,0,0,0.10127801120448177) 100%),url('../../assets/hero.jpg');
    background-size: cover;
    background-position: 50%;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
}
.cta{
    font-size: 2em;
    text-transform: capitalize;
    color: #fff;

}
.btn-cta{
    background-color: #fc8019;
    color: #fff;
    padding: .5em .4em;
    border-radius: 10px;
    transition: all .1s ease-in;
    position: relative;
    top: 0;
}
.btn-cta:hover{
    box-shadow: 0 3px 5px 1px rgba(0,0,0,.3);
    top: -1px;
}
.btn-cta:active{
    box-shadow: 0 1px 4px 1px rgba(0,0,0,.3);
    top: 0;
}
</style>