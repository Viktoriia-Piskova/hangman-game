<script setup>
import PlayBoard from './components/PlayBoard.vue'
import GameState from './components/GameState.vue'

import { useWordStore } from './stores/WordStore.js'
import { storeToRefs } from 'pinia';

const store = useWordStore();
const gameState = storeToRefs(store).gameState


</script>

<template>
  <div>
    <GameState v-if="!gameState.isActive" />

    <PlayBoard v-if="gameState.isActive" :class="{invisible: gameState.isPaused}"/>
  </div>

</template>

<style>
* {
  font-family: 'Courier New', Courier, monospace;
}

.menu {
  display: flex;
  position: fixed;
}

.invisible {
  opacity: 0;
}

h2 {
    font-size: 15vw;
}

</style>
