<template>
    <div>
        <h3><span>{{ minutes }}</span> : <span>{{ seconds }}</span></h3>
        <button @click="startTimer"> start</button>
        <button @click="stopTimer"> stop</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'

let seconds = ref(0)
let minutes = ref(0)
let totalSeconds = 0
let timerId = ''

function startTimer() {
    //debugger
    timerId = setInterval(()=> { 
        totalSeconds ++;
        seconds.value = totalSeconds % 60 < 10 ? `0${totalSeconds % 60 }` : totalSeconds % 60;
        minutes.value = Math.floor(totalSeconds / 60) < 10 ? `0${Math.floor(totalSeconds / 60) }` : Math.floor(totalSeconds / 60);
    }, 1000)
}

function stopTimer() {
    clearInterval(timerId)
}

</script>

<style scoped>

</style>