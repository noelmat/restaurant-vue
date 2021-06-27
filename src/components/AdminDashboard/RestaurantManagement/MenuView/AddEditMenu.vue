<template>
    <div class="form-wrapper">
        <h1 class="heading">
            {{title}}
        </h1>
        <form novalidate>
            <div class="form-group">
                <input type="text" class="form-element"  :class="{'error': $v.form.name.$error}" v-model="form.name" placeholder="Menu Name" @blur="$v.form.name.$touch()">
                <div class="validation" v-if="$v.form.name.$error">
                    Field required
                </div>

            </div>
            <div class="form-group">
                <label for="openingTime">Open Time:</label>
                <fieldset class="form-element-set" id="openingTime">
                <select name="openTimeHour" class="form-element"  :class="{'error': $v.form.openTime.hours.$error}" v-model="form.openTime.hours" @blur="$v.form.openTime.hours.$touch()">
                    <option value="">--hour--</option>
                    <option v-for="n in 24" :value="n-1" :key="n-1">{{n-1}}</option>
                </select>
                <select name="openTimeMinutes" class="form-element" :class="{'error': $v.form.openTime.minutes.$error}" v-model="form.openTime.minutes"  @blur="$v.form.openTime.minutes.$touch()">
                    <option value="">--minutes--</option>
                    <option v-for="n in 60" :value="n-1" :key="n-1">{{n-1}}</option>
                </select>
                </fieldset>
                
            </div>
            <div class="form-group">
                <label for="closeingTime">Close Time:</label>
                <fieldset class="form-element-set" id="closeingTime">
                    <select name="closeTimeHour" class="form-element" :class="{'error': $v.form.closeTime.hours.$error}" v-model="form.closeTime.hours" @blur="$v.form.closeTime.hours.$touch()">
                        <option value="">--hour--</option>
                        <option v-for="n in 24" :value="n-1" :key="n-1">{{n-1}}</option>
                    </select>
                    <select name="closeTimeMinutes" class="form-element" :class="{'error': $v.form.closeTime.minutes.$error}"  v-model="form.closeTime.minutes"  @blur="$v.form.closeTime.minutes.$touch()">
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
import { required } from 'vuelidate/lib/validators';

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
                    hours: '',
                    minutes: ''
                },
                closeTime: {
                    hours: '',
                    minutes: ''
                },
                availability: [true, true, true, true, true, true, true]
            },
            days: ['M','T','W','T','F','S','S'],
        }
    },
    validations:{
        form: {
            name: {
                required,
            },
            openTime:{
                hours: {
                    required
                },
                minutes: {
                    required
                }
            },
            closeTime: {
                hours: {
                    required
                },
                minutes: {
                    required
                }
            }
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
            this.$v.form.$touch();
            if(!this.$v.form.$invalid){
                if(this.checkTime(this.form.openTime, this.form.closeTime)){
                    this.$emit('save-menu', this.form);
                }else{
                    this.$toast.error('Close time not valid');
                }
            }else{
                this.$toast.error('Please check the inputs');
            }
        },
        checkTime(openTime, closeTime){
            if(closeTime.hours < openTime.hours){
                return false;
            }
            if(closeTime.hours === openTime.hours){
                if(closeTime.minutes <= openTime.minutes){
                    return false;
                }
            }
            return true
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
    padding: 2em;
    border-radius: 10px;
    font-size: .9em;
}
.form-group{
    min-width: 200px;
    padding: .5em 0;
    display: flex;
    justify-content: space-between;
    /* align-items: ; */
    font-size: .9em;
    flex-direction: column;

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
    background-color: #fff;
}

.form-element:focus-visible{
    outline: 0;
}
fieldset{
    border: 0;
    padding: 0;
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
.validation{
    font-size: .9em;
    color: crimson;
    margin-left: 1em;
}
.error{
    border-bottom: 1px solid crimson;
    /* box-shadow: 0 0 1px 1px rgba(220, 20, 60, 0.1); */
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