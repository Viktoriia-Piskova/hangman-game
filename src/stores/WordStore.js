import { defineStore } from 'pinia'

export const useWordStore = defineStore('WordStore', {
    state: () => ({
        word: 'hello', 
        answers: [],
        remainingLetters: 0,
        }),
    getters: {
        wordLength() {
            return this.word.length
        },
        
    },
    actions: {
        startGame() {
            this.answers = Array.from(this.word).map((el) => {return el = "_"});
            this.remainingLetters = this.word.length
        },
        checkLetter(letter) {
            let guess = letter.value.toLowerCase()
            for (let i = 0; i <= this.word.length; i++) {
                if (this.word[i] == guess) {
                    this.answers[i] = guess
                    this.remainingLetters--
                }
            }
        },

    }
    
} )

