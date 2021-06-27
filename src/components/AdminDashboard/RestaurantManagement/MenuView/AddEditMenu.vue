<template>
    <div class="form-wrapper">
        <h1 class="heading">
            {{title}}
        </h1>
        <form novalidate>
            <div class="form-group">
                <input type="text" class="form-element" v-model="form.name" placeholder="Menu Name">
            </div>
            <div class="form-group">
                <label for="openingTime">Open Time:</label>
                <fieldset class="form-element-set" id="openingTime">
                <select name="openTimeHour" class="form-element" v-model="form.openTime.hours">
                    <option value="">--hour--</option>
                    <option v-for="n in 24" :value="n-1" :key="n-1">{{n-1}}</option>
                </select>
                <select name="openTimeMinutes" class="form-element" v-model="form.openTime.minutes">
                    <option value="">--minutes--</option>
                    <option v-for="n in 60" :value="n-1" :key="n-1">{{n-1}}</option>
                </select>
                </fieldset>
                
            </div>
            <div class="form-group">
                <label for="closeingTime">Close Time:</label>
                <fieldset class="form-element-set" id="closeingTime">
                    <select name="closeTimeHour" class="form-element" v-model="form.closeTime.hours">
                        <option value="">--hour--</option>
                        <option v-for="n in 24" :value="n-1" :key="n-1">{{n-1}}</option>
                    </select>
                    <select name="closeTimeMinutes" class="form-element" v-model="form.closeTime.minutes">
                        <option value="">--minutes--</option>
                        <option v-for="n in 60" :value="n-1" :key="n-1">{{n-1}}</option>
                    </select>
                </fieldset>
            </div>
            <div class="form-group avail">
                <p>Availability</p>
                <div class="">
                    <a class="day" v-for="n in 7" :class="{'day-active': form.availability[n-1]}" :key="n-1" @click.prevent="changeAvailability(n-1)">{{days[n-1]}}</a>
                </div>

            </div>
            <div class="btn-panel">
                <a href="" class="link-unstyled btn-icon" @click.prevent='save' title="Save Menu">
                    <i class="far fa-check-circle"></i>
                </a>
                <a href="" class="link-unstyled btn-icon btn-cancel" @click.prevent='cancel' title="Cancel">
                    <i class="far fa-times-circle"></i>
                </a>
            </div>
        </form>
    </div>    
</template>
<script>
export default {
    name: 'AddEditMenu',
    props:{
        menu:{
            default: function(){
                return {}
            }
        },
        title:{
            default: 'Create Menu'
        }
    },
    data(){
        return {
            form: {
                name: '',
                openTime: {
                    hours: 0,
                    minutes: 0
                },
                closeTime: {
                    hours: 0,
                    minutes: 0
                },
                availability: [false, false, false, false, false, false, false]
            },
            days: ['M','T','W','T','F','S','S'],
        }
    },
    created(){
        if(Object.keys(this.menu).length !== 0){
            this.form.name = this.menu.name;
            this.form.openTime = {...this.menu.openTime}
            this.form.closeTime = {...this.menu.closeTime}
            this.form.availability = [...this.menu.availability]
        }
    },
    methods:{
        save(){
            //validate Form
            this.$emit('save-menu', this.form);
        },
        cancel(){
            this.$emit('cancel');
        }, 
        changeAvailability(index){
            this.$set(this.form.availability, index, !this.form.availability[index]);
        }
    }
}
</script>
<style scoped>
.heading{
    margin: 0;
    margin-bottom: 1em;
    text-align: center;

}
.form-wrapper{
    background-color: #fff;
    padding: 1.5em;
    border-radius: 10px;
    font-size: .9em;
}
.form-group{
    padding: .5em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .9em;
}
.form-element-set{
    display: flex;
    justify-content: space-between;
}
.form-element{
    font-size: .9em;
    padding: .5em 0;
    border: 0;
    border-bottom: 1px solid #000;
    width: 100%;
}

.form-element:focus-visible{
    outline: 0;
}
fieldset{
    border: 0;
}
label{
    font-weight: bold;
}
.day{
    font-weight: initial;
    border-radius: 50%;
    font-size: 0.9em;
    padding: 3px 6px;
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


.btn-panel{
    margin: 1em 0 0;
    display: flex;
    align-items: center;
    justify-content: center;;
}
.btn-icon{
    border-radius: 50%;
    font-size: 2em;
    padding: 0 .5em;
}

.btn-cancel:hover{
    color: crimson;
}
.avail{
    display: flex;
    flex-direction: column;
}
.avail p{
    padding-bottom: .8em;
}
@media (min-width:900px){
    .form-wrapper{
        background-color: #fff;
        padding: 3em;
        margin: 3em;
        border-radius: 10px;
    }
    .form-element{
        
        font-size: 1.2em;
        padding: .5em;   
    }
    .btn-icon:hover{
        color: #673AB7
    }
    .day:hover{
        background-color: #673AB7;
        cursor: pointer;
    }
}

</style>