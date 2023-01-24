<template>
    <div>
        <div class="controllers-wrapper">
            <button @click="exitGame" class="exit-btn">Exit game</button>
            <button @click="resetGame" class="next-btn">Next word</button>

        </div>
        <TimerDisplay />

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

import { ref } from 'vue'
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

.controllers-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
button {
    background-color: #ffe400;
    border: 5px solid black;
    font-size: larger;
    font-weight: 900;
    margin: 0.5rem;
}

.exit-btn {
    background-color: red;
    color: white;
}

.next-btn {
    background-color: rgb(1, 1, 234);
    color: #fff;
}
</style>