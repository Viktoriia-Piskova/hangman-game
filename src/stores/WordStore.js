import { defineStore } from 'pinia'

export const useWordStore = defineStore('WordStore', {
    state: () => ({
        word: 'helloworld', 
        answers: [],
        remainingLetters: 0,
        }),
    getters: {
        wordLength() {
            return this.word.length
        }
    },
    actions: {
        checkLetter(letter) {
            
        }
    }
    
} )

