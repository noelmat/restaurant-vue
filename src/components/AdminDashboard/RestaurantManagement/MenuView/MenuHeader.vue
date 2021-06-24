<template>
    <div class="menu-header">
        <h1 class="heading">
            {{ menu.name }}
        </h1>
        <a href="" class="link-unstyled btn btn-edit" @click.prevent="edit"><i class="fas fa-edit"></i> Edit</a>
        <div class="menu-subheader">
            <div class="subheading-item">
                <p>Availability</p>
                <span class="day" v-for="n in 7" :class="{'day-active': menu.availability[n-1]}" :key="n-1" >{{days[n-1]}}</span>
            </div>
            <div class="subheading-item">
                <p>Timing:</p>
                <p>{{timeString}}</p>
            </div>
        </div>           
    </div>
    <!-- <div class="menu-header" v-else>
        <form action=""></form>
            {{ menu.name }}

        <a href="" class="link-unstyled btn btn-edit" @click.prevent="save"><i class="fas fa-check"></i> Save Changes</a>
        <div class="menu-subheader">
            <div class="subheading-item">
                <p>Availability</p>
                <span class="day" v-for="n in 7" :class="{'day-active': menu.availability[n-1]}" :key="n-1" >{{days[n-1]}}</span>
            </div>
            <div class="subheading-item">
                <p>Timing:</p>
                <p>{{timeString}}</p>
            </div>
        </div>           
    </div> -->
</template>
<script>
export default {
    name: 'MenuHeader',
    props: [
        'menu'
    ],
    data(){
        return {
            days: ['M','T','W','T','F','S','S'],
        }
    },
    computed:{
        timeString(){
            const openTime = this.menu.openTime;
            const closeTime = this.menu.closeTime;
            return `${openTime.hours}:${openTime.minutes} - ${closeTime.hours}:${closeTime.minutes}`;
        }
    },
    methods: {
        edit(){
            this.$emit('edit-menu');
        }
    }
}
</script>
<style scoped>

.menu-header{
    padding: 7em 0 1em 4em;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../../../../assets/breakfast.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position:40% 30%;
    border-radius: 10px;
    position: relative;
}
.menu-subheader{
    color: #fff;
    font-weight: bold;
    display: flex;
}
.heading{
    display: inline-block;
    margin-bottom: 0px;
    color: #fff;
}
.subheading-item{
    margin-left: 1em;
}
.subheading-item:first-of-type{
    margin: 0;
}
.day{
    font-weight: initial;
    border-radius: 50%;
    font-size: 0.9em;
    padding: 2px 5px;
    margin-left: 4px;
    color: #fff;
    background-color: #aaa;
}
.day:first-of-type{
    margin: -2px;
}
.day-active{
    background-color: #673AB7;
}

.btn-edit{
    color: #fff;
    padding: .4em .8em;
    margin-left: 1em;
    position: relative;
    top: -.4em
}
.btn-edit:hover{
    color: #673AB7;
    background-color: #fff;
}
</style>