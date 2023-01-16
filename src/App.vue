<script setup>
import KeyBoard from '../src/components/KeyBoard.vue'
import HangmanPicture from '../src/components/HangmanPicture.vue'


</script>

<template>
  <div>
    <HangmanPicture />
    <WordToGuess />
    <KeyBoard @isChosenLetter="checkLetter(letter)" />
  </div>

</template>

<style scoped>

</style>
