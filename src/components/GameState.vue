<template>
    <div class="wrapper">
        <StartGame v-if="showMain">Start now!</StartGame>
        <WonGame v-if="gameState.winGame" />
        <LostGame v-if="gameState.lostGame" />
    </div>
</template>

<script setup>

import {ref} from 'vue'
import { useWordStore } from '../stores/WordStore.js'
import { storeToRefs } from 'pinia';
import StartGame from './gameState/StartGame.vue'
import WonGame from './gameState/WonGame.vue'
import LostGame from './gameState/LostGame.vue'


const store = useWordStore();
const remainingLett = storeToRefs(store).remainingLetters
const gameState = storeToRefs(store).gameState

const showMain = ref(!gameState.value.lostGame && !gameState.value.isPaused && !gameState.value.winGame)


</script>

<style scoped>
.wrapper {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.29);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
}

</style>