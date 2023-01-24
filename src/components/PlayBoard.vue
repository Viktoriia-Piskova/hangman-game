<template>
    <div>
        <TimerDisplay />
        <div>
            <button @click="exitGame">Exit game</button>
            <button @click="resetGame">Next word</button>

        </div>
        <HangmanPicture />
        <WordToGuess />
        <KeyBoard />
    </div>
</template>

<script setup>
import KeyBoard from './gamePlay/KeyBoard.vue';
import WordToGuess from './gamePlay/WordToGuess.vue';
import HangmanPicture from './gamePlay/HangmanPicture.vue';
import TimerDisplay from './gamePlay/TimerDisplay.vue'

import {ref} from 'vue'
import { useWordStore } from '../stores/WordStore.js';

const store = useWordStore()


function exitGame() {
    store.stopGame()
}
function resetGame() {
    store.stopGame()
    store.startGame()
}

</script>

<style scoped>

</style>