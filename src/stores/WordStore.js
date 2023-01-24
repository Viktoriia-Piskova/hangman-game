import { defineStore } from 'pinia'
import words from '../assets/words.json'

export const useWordStore = defineStore('WordStore', {
    state: () => ({
        word: '', 
        hint: '',
        answers: [],
        attempts: 10,
        remainingLetters: 0,
        letters: [],
        totalSeconds: 0,
        gameState: {
            isActive: false,
            isPaused: false,
            winGame: false,
            lostGame: false,
        }
        
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
            this.gameState.isActive = true;
            this.gameState.winGame = false;
            this.gameState.lostGame = false;
            this.attempts = 10
            this.letters = this.createBoard()
            this.totalSeconds = 0

            this.answers = Array.from(this.word).map((el) => {return el = "_"});
            this.remainingLetters = this.word.length
        },

        stopGame() {
        this.word = ''; 
        this.hint = '';
        this.answers = [];
        this.remainingLetters = 0;
        this.gameState.isActive = false;
        },

        resetGame() {
            this.stopGame();
            this.startGame();
        },

        checkLetter(letter) {
            letter.disabled = true
            let fail = true;
            let guess = letter.value.toLowerCase()
            for (let i = 0; i <= this.word.length; i++) {
                if (this.word[i] == guess) {
                    this.answers[i] = guess
                    fail = false
                    this.remainingLetters--
                } 
            }

            if(fail) {this.attempts--}
            
            console.log(this.attempts)
            if (this.remainingLetters === 0) {
                this.gameState.winGame = true
                this.gameState.isActive = false
            } else if (this.attempts === 0) {
                this.gameState.isActive = false
                this.gameState.lostGame = true
            }
        },
        createBoard() {
            const charts = Array.from(Array(26).keys()).map((e) => e + 65);
            const alphabet = charts.map((el) => { return { value: String.fromCharCode(el), disabled: false } })
            return [...alphabet]
        }
    }
    
} )

