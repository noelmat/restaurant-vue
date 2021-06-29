<template>
    <footer>
        <div class="footer">
            <div class="footer-nav">
                <span>Restaurant User? </span>
                <router-link :to="{name: 'admin-login'}" class="link-unstyled nav-link btn">Login</router-link>
            </div>
        </div>
        <div class="copy">
            All rights reserved &copy;
        </div>
    </footer>
</template>
<script>
import {getRestaurant} from '@/services/customer/restaurant';
import {formatTime, getTimeString} from '@/utils/time-utils';
export default {
    name: 'Footer',
      data(){
        return{
            restaurantDetails: {}
        }
    },
    created(){
        getRestaurant()
        .then(restaurant => {
            Object.keys(restaurant).forEach(key => {
                this.$set(this.restaurantDetails, key, restaurant[key]);
            })
        })    
        .catch()    
    },
    computed:{
        address(){
            return this.restaurantDetails.address
        },
        addressLine1(){
            if(this.address !== undefined && this.address.addressLine1 !== undefined){
                return this.address.addressLine1;
            }
            return '';
        },
        addressLine2(){
            if(this.address !== undefined && this.address.addressLine2 !== undefined){
                return this.address.addressLine2;
            }
            return '';
        },
        timeString(){
            const openTime = this.restaurantDetails.openTime;
            const closeTime = this.restaurantDetails.closeTime;
            return `${getTimeString(formatTime(openTime.hours), formatTime( openTime.minutes))} - ${getTimeString(formatTime(closeTime.hours), formatTime( closeTime.minutes))}`
        }

    }
}
</script>
<style scoped>
footer{
    background-color: #333;
    color: #fff;
    padding-bottom: 2em; 
}
.footer{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;

}
.contact{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2em 0;
}
.line {
    line-height: 1.1;
}
.primary-contact{
    margin-top: 1em;
}
.primary-contact a{
    color: #fff;
}
.footer-nav{
    display: flex;
    justify-content: center;
    padding-bottom: 2em;
    align-items: center;
    align-self: center;
    padding-top: 3em;
}
.nav-link{
    color: #fff;
    background-color: #fc8019;
    font-weight: bold;
    padding: .5em;
}
span{
    color: #fff;
    margin-right: 5px;
}
.copy{
    text-align: center;
    color: #fff;

}
.timing{
    font-weight: bold;
    margin-top: 1em;
}
@media (min-width:600px) {
    .footer{
        flex-direction: row;
        justify-content: space-around;
    }
    .footer-nav{
        align-self: flex-start; 
    }
}

</style>