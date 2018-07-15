<template>
  <div class="home">
    <Header/>
    <SearchBar/>
    <div class="content">
        <div :v-for="game in games">
            {{game.name}}
        </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import axios from "axios";

export default {
  name: 'Home',
    components: {SearchBar, Header},
    data() {
        return {
            games: ''
        }
    },
    props: {
    msg: String
  },
    mounted: function() {

        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        axios.get(proxyUrl+'https://api-endpoint.igdb.com/games/?fields=*', {
            headers: {
                'user-key': '737bc70227de8d102078bcc22c8992a7',
                Accept: 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
        })
        .then(response => {
            // Do work here
            this.games = response.data;
        })
        .catch(e => {
            /* eslint-disable */
            console.log(e)
           // alert(e);
        });

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
