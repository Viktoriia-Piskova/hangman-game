<template>
    <div class="wrapper">
        <span v-for="answer in answers" :key="answer" class="answer">{{ answer }}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                word: 'helloworld',
                answers: [],
                remainingLetters: 0,
            }
        },
        computed: {
            wordLength() {
                return this.word.length
            },

        },
        created() {
            this.answers = Array.from(this.word).map((el) => el = '_')
            this.remainingLetters = this.word.length
        },
        methods: {
            
        }
    }
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