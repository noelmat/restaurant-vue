<template>
    <div class="card">
        <div class="card-heading">
            <div class="heading-container">
                <h2 class="heading">{{menu.name}}</h2>
            </div>
        </div>
        <div class="card-details">
            <div class="card-detail">
                <h3>Availability</h3>
                <div class="card-detail-data">
                    <span class="day" v-for="n in 7" :class="{'day-active': menu.availability[n-1]}" :key="n-1" >{{days[n-1]}}</span>
                </div>
            </div>
            <div class="card-detail">
                <h3>Timing</h3>
                <div class="card-detail-data">
                    <span>{{timeString}}</span>
                </div>
            </div>
        </div>
        <router-link :to="{name: 'dashboard-menu-detail', params: {menuId: menu._id}} " class="link-unstyled btn btn-primary">
            View
        </router-link>
        
    </div>
</template>
<script>
import {getTimeString, formatTime} from '@/utils/time-utils';
export default {
    name: 'MenuCard',
    props: [
        'menu',
    ],
    data(){
        return {
            days: ['M','T','W','T','F','S','S'],
            showOptions : false
        }
    },
    computed:{
        timeString(){
            const openTime = this.menu.openTime;
            const closeTime = this.menu.closeTime;
            return `${getTimeString(formatTime(openTime.hours), formatTime( openTime.minutes))} - ${getTimeString(formatTime(closeTime.hours), formatTime( closeTime.minutes))}`
        }
    },
    methods: {
        deleteMenu(){
            this.$emit('delete-menu', this.menu)
        }
    }
}
</script>
<style scoped>
.card{
    flex-basis: 30%;
    min-width: 210px;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 1px 5px 1px rgba(0,0,0,0.2);
    margin-right: 3.3%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
    font-size: .8em;
}
@media (min-width:900px) {
    .card{
        flex-basis: 30%;
        min-width: 250px;
        border-radius: 3px;
        background-color: #fff;
        box-shadow: 0 1px 5px 1px rgba(0,0,0,0.2);
        margin-right: 3.3%;
        display: flex;
        flex-direction: column;
        margin-bottom: 2em;
        font-size: 1em;
    }

}
.card-img-block{
    border-radius: 10px;
    position: relative;
}
.card-img{
    border-radius: 10px;
}
.card-details{
    padding: 1em 2em 0;
}
.card-detail{
    padding: 0.5em 0 0 0;
}
.card-detail-data{
    margin: .8em 0;
}
.overlay-container{
    position: absolute;
    left: 0;
    width: 100%;
}
.heading-container{
    
    bottom: 4px;
    color: #333;
    padding: 1.6em .4em 1em;
}
.delete-container{
    top: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0,0,0,0.6));
    padding: .5em 1em 1em;   
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.delete{
    color: #fff;
    font-size: 1.2em;
}
.delete:hover{
    color: crimson
}
.heading {
    margin: 0 1em;
}
.options{
    margin-right: 1em;
    color: #fff;
    font-size: 1.1em;
}
.day{
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
    background-color: #333;
}
.btn{
    margin-bottom: 1.5em;    
    padding: 0.5em 1em;
}
.btn-primary{
    background-color: #fc8019;
    width: 100px;
    text-align: center;
    align-self: center;
}

</style>