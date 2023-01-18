<template>
    <div>
        <button @click="start">Start game</button>
        <h1>{{ remainingLett }}</h1>
    </div>
</template>

<script setup>

import {ref} from 'vue'
import { useWordStore } from '../stores/WordStore.js'
import { storeToRefs } from 'pinia';

const store = useWordStore();
const remainingLett = storeToRefs(store).remainingLetters

function start() {
    store.startGame()
}
</script>

<style lang="scss" scoped>

</style>