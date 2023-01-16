import {defineStore} from 'pinia'

export const useWordStore = defineStore('WordStore', {
    state: () => ({word: 'helloworld', }),
    getters: {
        wordLength() {
            return this.word.length
        }
    },
    
} )

