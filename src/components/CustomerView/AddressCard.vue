<template>
    <a class="card" @click="$emit('click')">
        <div class="line">
            <div class="line1">
                {{address.addressLine1}},
            </div>
        </div>
        <div class="line">
            <div class="line2">
                {{address.addressLine2}},
            </div>
        </div>
        <div class="line">
            {{address.city}},
        </div>
        <div class="line">
            {{address.landmark}}
        </div>
        <div class="line">
            {{address.primaryContact}}
        </div>
    </a>
</template>
<script>
export default {
    name: 'AddressCard',
    props:[
        'address',
    ]    
}
</script>
<style scoped>
.card{
    background-color: #fff;
    width: 90%;
    box-shadow: 0 1px 3px 1px rgba(0,0,0,0.1);
    padding: .5em;
}
</style>