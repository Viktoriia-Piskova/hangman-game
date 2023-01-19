<template>
    <div class="wrapper" v-if="answers">
        <span v-for=" answer, index , in answers" :key="index" class="answer">{{ answer }}</span>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useWordStore } from '../../stores/WordStore.js'
import { storeToRefs } from 'pinia';

const store = useWordStore();

const {answers} = storeToRefs(store);


</script>

<style scoped>
.answer {
    font-size: 2rem;
    border: 8px solid grey;
    border-radius: 16px;
    padding: 0.5rem;
    margin: 0.5rem;
    background-color: #f0f0f0;
    font-family: monospace;
}

.wrapper {
    margin: 1rem;
    padding: 1rem;
}
</style>