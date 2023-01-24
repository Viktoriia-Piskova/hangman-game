<template>
    <div>
        <div v-if="onPause" class="wrapper">
            <div class="container">
                <h2>😴🙄⏰</h2>
                <h2>Paused</h2>
                <button @click="startTimer">Continue</button>
            </div>
        </div>

        <div class="info-wrapper">
            <div class="timer-wrapper">
                <h3><span v-if="minutes > 0">{{ minutes }}</span>
                    <span v-if="minutes == 0">00</span>:<span v-if="seconds > 0">{{ seconds }}</span>
                    <span v-if="seconds == 0">00</span>
                </h3>
                <button @click="stopTimer">Pause</button>
            </div>

           <div class="hint-wrapper">
                    <p v-show="showHint">{{ hint }}</p>
                <button @click="show">?</button>
           </div>

        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import { useWordStore } from '../../stores/WordStore.js';
import { storeToRefs } from 'pinia';

const store = useWordStore()
let seconds = ref(0)
let minutes = ref(0)
let { totalSeconds } = storeToRefs(store)
let { hint } = storeToRefs(store)
let onPause = ref(false)
let timerId = ''
let showHint = false

function show() {
    showHint = true
    setTimeout(() => {showHint = false}, 5000)
}

function startTimer() {
    onPause.value = false
    timerId = setInterval(() => {
        totalSeconds.value++;
        seconds.value = totalSeconds.value % 60 < 10 ? `0${totalSeconds.value % 60}` : totalSeconds.value % 60;
        minutes.value = Math.floor(totalSeconds.value / 60) < 10 ? `0${Math.floor(totalSeconds.value / 60)}` : Math.floor(totalSeconds.value / 60);
    }, 1000)
}

function stopTimer() {
    clearInterval(timerId)
    onPause.value = true
}


onBeforeMount(startTimer)



</script>

<style scoped>
.wrapper {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.836);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
}

h2 {
    font-size: 15vw;
    color: rgb(255, 255, 0);
}

.info-wrapper {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}
.hint-wrapper {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}

.hint-wrapper p {
    font-size: 1.5rem;
    font-weight: 900;
    color: rgb(6, 99, 6);
    transition: all 500ms;
}

.timer-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 3rem;
}

h3 {
    font-size: 2.5rem;
    color: #d90c0c;
    font-weight: 1000;
}

button {
    background-color: #ffe400;
    border: 5px solid black;
    font-size: larger;
    font-weight: 900;
    margin: 0.5rem;
}
</style>