<template>
    <div class="wrapper">
        <div class="message">
            {{ message }}
        </div>
        <div class="btn-panel">
            <a href="" id="confirm" class="btn link-unstyled btn-confirm" @click.prevent="confirm">
                {{buttonText}}
            </a>
            <a href="" id="cancel" class="btn link-unstyled btn-cancel" @click.prevent='cancel' title="Cancel">
                Cancel
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ConfirmBox',
    props: [
        'message',
        'buttonText'
    ],
    methods: {
        confirm(){
            this.$emit('confirm');
        },
        cancel(){
            this.$emit('cancel');
        }
    }
}
</script>
<style scoped>
.wrapper{
    background-color: #fff;
    padding: 1em;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.message{
    font-weight: bold;
    text-align: center;
    
}
.btn-panel{
    display: flex;
    margin: 2em 0 0;
    width: 90%;
    max-width: 180px;
    /* min-width: 200px; */
    justify-content: space-between;
}
.btn{
    color: #fff;
    border-radius: 5px;
    padding: .8em;
    font-size: .9em
}
.btn-confirm{
    background-color: rgb(211, 0, 42);
}
.btn-cancel{
    /* margin-left: ; */
    background-color: #777;
}
</style>