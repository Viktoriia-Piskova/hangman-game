<template>
    <div>
        <button @click="start">Start game</button>
        <TimerDisplay />
    </div>
</template>

<script setup>

import {ref} from 'vue'
import { useWordStore } from '../stores/WordStore.js'
import { storeToRefs } from 'pinia';
import TimerDisplay from './gamePlay/TimerDisplay.vue'

const store = useWordStore();
const remainingLett = storeToRefs(store).remainingLetters

function start() {
    store.startGame()
}
</script>

<style lang="scss" scoped>

</style>