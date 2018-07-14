<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './pages/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  html, body {
    margin: 0;
    padding: 0;
  }
</style>
