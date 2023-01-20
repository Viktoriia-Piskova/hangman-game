<template>
    <div >
        <button @click="stopGame"> <slot> Exit </slot></button>
    </div>
</template>

<script setup>
import { useWordStore } from '../../stores/WordStore.js';
import { storeToRefs } from 'pinia';

const store = useWordStore()
 
function stopGame (){
    store.stopGame()
}

</script>

<style scoped>

</style>