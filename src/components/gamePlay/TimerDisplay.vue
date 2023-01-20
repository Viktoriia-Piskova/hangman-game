<template>
    <div>
        <div v-if="onPause" class="wrapper">
            <div class="container">
                <h2>😴🙄⏰</h2>
                <h2>Paused</h2>
                <button @click="startTimer">Continue</button>
            </div>
        </div>

        <h3><span v-if="minutes > 0">{{ minutes }}</span>
             <span v-if="minutes == 0">00</span> 
             : 
             <span v-if="seconds > 0">{{ seconds }}</span>
             <span v-if="seconds == 0">00</span>
        </h3>
        <button @click="stopTimer"> stop</button>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'

let seconds = ref(0)
let minutes = ref(0)
let totalSeconds = 0
let onPause = ref(false)
let timerId = ''



function startTimer() {
    onPause.value = false
    timerId = setInterval(() => {
        totalSeconds++;
        seconds.value = totalSeconds % 60 < 10 ? `0${totalSeconds % 60}` : totalSeconds % 60;
        minutes.value = Math.floor(totalSeconds / 60) < 10 ? `0${Math.floor(totalSeconds / 60)}` : Math.floor(totalSeconds / 60);
    }, 1000)
}

function stopTimer() {
    clearInterval(timerId)
    onPause.value = true
    console.log(onPause)
}

onBeforeMount(startTimer)

</script>

<style scoped>

.wrapper {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.673);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
}

h2 {
    font-size: 15vw;
}

</style>