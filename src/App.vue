<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
// import axios from 'axios'
export default {
  name: 'app',
  components: {
    Home
  },
  created(){
      // axios.post("https://api-endpoint.igdb.com/headers/",
      //     {
      //         "api_header": {
      //             "header": "Access-Control-Allow-Origin",
      //              "value": "localhost:8080"
      //         }
      //     })
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
