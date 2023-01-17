<template>
    <div>
        <HangmanPicture />
        <WordToGuess/>
        <KeyBoard />
    </div>
</template>

<script setup>
import KeyBoard from './gamePlay/KeyBoard.vue';
import WordToGuess from './gamePlay/WordToGuess.vue';
import HangmanPicture from './gamePlay/HangmanPicture.vue';

</script>

<style scoped>

</style>