<template>
    <div class="menu-item" @mouseenter="toggleHover" @mouseleave="toggleHover">
        <div class="menu-wrapper">
            <div class="menu-item-line">
                <h4 class="name">
                    {{menuItem.name}}
                </h4>
                <div class="special" v-if="menuItem.special">
                    specials
                </div>

            </div>
            <div class="menu-item-line ">
                <div class="spice-level">
                    <span>{{ menuItem.spiceLevel}}</span> 
                    <i class="fas fa-pepper-hot" v-for="n in 5" :class="{'active': n<=menuItem.spiceLevel}" :key="n"></i>
                </div>
                <div class="rating">
                    <span>{{ menuItem.rating}}</span>
                    <i class="fa-star" v-for="n in 5" :class="{'fas': n<=menuItem.rating, 'far': !n<menuItem.rating}" :key="n"></i>
                </div>
                <div class="price">
                    ₹ {{menuItem.price}}
                </div>

            </div>
            <div class="menu-item-line" >
                {{ menuItem.description }}
            </div>
        </div>
        <a class="add link-unstyled" :class="{'show-on-desktop': hovered}" @click.prevent="addToCart">
            <a class="link-unstyled">Add</a>
        </a>
    </div>
    
</template>
<script>
// import {POSITION} from 'vue-toastification';
export default {
    name: 'MenuItem',
    props: {
        menuItem:{

        },
        cartItemId: {
            default: '',
        }
    },
    data(){
        return {
            showFull : false,
            hovered: false,
        }
    },
    methods:{
        toggleDescription(){
            this.showFull = !this.showFull;
        },
        toggleHover(){
            this.hovered = !this.hovered;
        },
        addToCart(){
            const item = {}
            item.item = this.menuItem._id;
            item.quantity = 1;
            this.$store.dispatch({
                type: 'addToCart',
                item
            }).then(()=>{
                this.$toast.success(`${this.menuItem.name} Added`)
            })

        }
    }
}
</script>
<style scoped>
.menu-item{
    width: 100%;
    border-radius: 3px;
    border: 0px solid #000;
    margin: .4em 0;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 4px 1px rgba(0,0,0,0.1);
    background-color: #fff;
    align-items: center;

}

.menu-item:hover{
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
}
.menu-wrapper{
    display: flex;
    flex-direction: column;
    flex-basis: auto;
    width: 100%;
    padding: .5em;
}

.menu-item-line{
    display: flex;
    justify-content: space-between;
    padding: .8em .8em .4em;
    flex-wrap: wrap;
}
.menu-item-details{
    /* width: 60% */
}
.menu-description{
    padding: .8em;
    display: flex;
}

.spice-level i{
    display: none;
}
.spice-level span{
    margin-right: .4em;
    font-weight: bold;
}
.spice-level i:first-of-type{
    display: initial;
}
.spice-level i{
    color: #aaa;
}
.spice-level .active{
    color: crimson;
}
.rating i{
    display: none;
}
.rating span{
    margin-right: .4em;
    font-weight: bold;
}
.rating i:first-of-type{
    display: initial;
}
.description{
    width: 100%;
    border-radius: 5px;
}
.form-element{
    padding: .2em 0;
}
.show-on-desktop{
    display: none;
}

.special{
    background-color: #fc8019;
    padding: .2em 1em;
    color: #fff;
    align-self: flex-end;
}
.add{
    flex-basis: 25%;
    border-radius: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#fc8019;
    margin: .6em 0;
    width: 50px;

}
.add a{
    background-color:#fc8019 ;
    padding: .5em 1em;
    color: #fff;
}

@media (min-width: 600px) {
    .spice-level span{
        display: none;
    }
}
@media (min-width: 900px) {
    .menu-item-line{
        padding: .8em .8em .4em;
    }
    .menu-item{
        flex-direction: row;
        align-items: stretch;
    }
    .add{
        flex-basis: 15%;
        display: none;
        justify-content: center;
        align-items: center;
        background-color:#fc8019 ;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        color: #fff;
        font-weight: bold;
        margin: 0;
        cursor: pointer;
    }
    .add a{
        color: #fff;
        border-radius: 5px;
        
    }
    .add:hover{
        cursor: pointer;
    }
    .spice-level i{
        display: initial;
    }

}
@media (min-width: 900px) {
    .show-on-desktop{
        display: flex;
    }
}
@media (max-width: 900px){
  
    
}


</style>