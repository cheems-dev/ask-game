<template>
  <Indecision/>
</template>

<script>
import Indecision from './components/Indecision.vue'

export default {
  name: 'App',
  components: {
    Indecision
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');

#app {
  font-family: 'Special Elite', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30vh;
}
</style>
