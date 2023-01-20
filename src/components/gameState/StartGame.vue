<template>
    <div>
        <div class="wrapper">
                <button @click="start" class="start-btn"> <slot>Start</slot></button>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { useWordStore } from '../../stores/WordStore.js'
//import { storeToRefs } from 'pinia';

const store = useWordStore();

function start() {
    store.startGame()
}


</script>

<style  scoped>


.start-btn {
    background-color: #0dad0d;
    color: #fff;
    font-size: 3rem;
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 1000;
    text-transform: uppercase;
    border: 9px solid black;
    padding: 6rem;
    outline: 3px solid #fff;
    transition: all 300ms;
}
.start-btn:hover, .start-btn:active {
    transform: scale(1.1);
    background-color: #21c021;
    outline: 4px solid rgb(225, 255, 0);
}

</style>