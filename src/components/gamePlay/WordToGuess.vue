<template>
    <div class="wrapper">
        <span v-for="answer in answers" :key="answer" class="answer">{{ answer }}</span>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useWordStore } from '../../stores/WordStore.js'

const store = useWordStore();

    const answers = ref(store.answers)


        // data() {
        //     return {
        //         word: 'helloworld',
        //         answers: [],
        //         remainingLetters: 0,
        //     }
        // },
        // computed: {
        //     wordLength() {
        //         return this.word.length
        //     },

        // },
        // onBeforeMount( () => {
        //     this.answers = Array.from(this.word).map((el) => el = '_')
        //     this.remainingLetters = this.word.length})
        

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