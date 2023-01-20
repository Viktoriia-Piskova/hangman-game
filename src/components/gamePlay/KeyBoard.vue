<template>
    <div class="wrapper">
        <button v-for="letter in letters" :key="letter.value" @click="selectLetter(letter)"
            :class="{ isDisabled: letter.disabled }" :disabled="letter.disabled">
            {{ letter.value }}
        </button>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue"
import { useWordStore } from '../../stores/WordStore.js'

const store = useWordStore();
const letters = ref([]);


function selectLetter(letter) {
    store.checkLetter(letter)
}

onBeforeMount(() => {
    const charts = Array.from(Array(26).keys()).map((e) => e + 65);
    const alphabet = charts.map((el) => { return { value: String.fromCharCode(el), disabled: false } })
    letters.value = [...alphabet]
})


</script>

<style scoped>
.isDisabled {
    background-color: rgb(132, 66, 66);
}

.wrapper {
    margin: 1rem;
    padding: 1rem;
}
</style>