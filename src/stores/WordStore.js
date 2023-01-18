import { defineStore } from 'pinia'

export const useWordStore = defineStore('WordStore', {
    state: () => ({
        word: 'hello', 
        answers: ['_', '_', '_', '_', '_'],
        remainingLetters: 0,
        }),
    getters: {
        wordLength() {
            return this.word.length
        },
        
    },
    actions: {
        checkLetter(letter) {
            let guess = letter.value.toLowerCase()
            for (let i = 0; i <= this.word.length; i++) {
                if (this.word[i] == guess) {
                    this.answers[i] = guess
                }
            }
        },
    }
    
} )

