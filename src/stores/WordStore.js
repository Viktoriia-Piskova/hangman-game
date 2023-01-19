import { defineStore } from 'pinia'
import words from '../assets/words.json'

export const useWordStore = defineStore('WordStore', {
    state: () => ({
        word: '', 
        hint: '',
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
            let i = Math.floor(Math.random() * words.length)
            this.word = words[i].word.toLowerCase()
            this.hint = words[i].hint

            this.answers = Array.from(this.word).map((el) => {return el = "_"});
            this.remainingLetters = this.word.length
        },
        resetGame() {

            
        },
        checkLetter(letter) {
            letter.disabled = true
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

