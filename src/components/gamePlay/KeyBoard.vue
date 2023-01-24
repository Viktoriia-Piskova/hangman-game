<template>
    <div class="keyboard-wrapper">
        <button v-for="letter in letters" :key="letter.value" @click="selectLetter(letter)"
            :class="{ isDisabled: letter.disabled }" :disabled="letter.disabled">
            {{ letter.value }}
        </button>
    </div>
</template>

<script setup>
import { ref, onBeforeMount, onBeforeUpdate } from "vue"
import { useWordStore } from '../../stores/WordStore.js'
import { storeToRefs } from "pinia";

const store = useWordStore();
const {letters} = storeToRefs(store);


function selectLetter(letter) {
    store.checkLetter(letter)
}


</script>

<style scoped>
.isDisabled {
    background-color: rgb(132, 66, 66);
}

.keyboard-wrapper {
    margin: 1rem;
    padding: 1rem;
}

.keyboard-wrapper button {
    color: #1a1a1a;
    background-color: #00ff3e;
    outline: 3px solid #ffed00;
    margin: 0.5rem;
    padding: 1rem;
    font-size: 2rem;
    border: 5px solid #000000;
    border-radius: 50px;
    height: 4rem;
    width: 4rem;
    font-weight: 1000;
    text-align: center;
}

.keyboard-wrapper button .isDisabled {
    background-color: rgb(132, 66, 66);
    cursor: not-allowed;
}
</style>