<script setup>
import KeyBoard from '../src/components/KeyBoard.vue'
import HangmanPicture from '../src/components/HangmanPicture.vue'
</script>

<template>
  <div>
  </div>
  <HangmanPicture />
  <KeyBoard />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
