<template>
    <div>
        <button v-for="letter in letters" :key="letter.value" @click="selectLetter(letter)" :class="{isDisabled: letter.disabled}" :disabled="letter.disabled">
            {{ letter.value }}
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            letters: []
        }
    },
    computed: {
         
    },
    methods: {
        selectLetter(letter) {
            letter.disabled = true
            console.log(letter)
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
</style>