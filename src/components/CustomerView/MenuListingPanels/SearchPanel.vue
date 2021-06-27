<template>
    <div class="panel">
        <input type="text" class="search-field" placeholder="What would you like to eat?">        
    </div>
</template>
<script>
export default {
    name: 'SearchPanel',

}
</script>
<style scoped>
.panel{
    flex-basis: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: absolute */
}
.search-field{
    text-align: center;
    width: 50%;
    max-width: 700px;   
    font-size: 1.5em;
    padding: .5em 1em;
    border-radius: 10px;
    border: 1px solid #333;
}
.search-field:focus-visible{
    outline: 0;
    box-shadow: 0 0 4px 1px rgba(0,0,0,0.2);
}   

</style>