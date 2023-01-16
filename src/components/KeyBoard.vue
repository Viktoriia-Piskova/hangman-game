<template>
    <div class="wrapper">
        <WordToGuess />
        <button v-for="letter in letters" :key="letter.value" @click="selectLetter(letter)" :class="{isDisabled: letter.disabled}" :disabled="letter.disabled">
            {{ letter.value }}
        </button>
    </div>
</template>

<script>
import WordToGuess from './WordToGuess.vue'

export default {
    components: {
        WordToGuess
    },
    data() {
        return {
            letters: []
        }
    },
    methods: {
        selectLetter(letter) {
            letter.disabled = true
            this.$emit('isChosenLetter', letter.value)
        }
    },
    created() {
            const charts = Array.from(Array(26).keys()).map((e) => e + 65);
            const alphabet = charts.map((el) => {return {value: String.fromCharCode(el), disabled: false}})
            this.letters = [...alphabet]
    }
}
</script>

<style scoped>
.isDisabled {
    background-color: red;
}

.wrapper {
    margin: 1rem;
    padding: 1rem;
}
</style>