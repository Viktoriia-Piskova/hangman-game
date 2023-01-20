<template>
    <div>
        <TimerDisplay />
        <HangmanPicture />
        <WordToGuess/>
        <KeyBoard />
    </div>
</template>

<script setup>
import KeyBoard from './gamePlay/KeyBoard.vue';
import WordToGuess from './gamePlay/WordToGuess.vue';
import HangmanPicture from './gamePlay/HangmanPicture.vue';
import TimerDisplay from './gamePlay/TimerDisplay.vue'


</script>

<style scoped>

</style>