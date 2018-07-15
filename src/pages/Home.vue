<template>
  <div class="home">
    <Header/>
    <SearchBar/>
    <div class="content">
    <div v-for="game in games">
        <GameBox :title="game.name" :img_url="game.cover?game.cover.url:'http://www.loudoweb.fr/images/me_manette_grand.png'"/>
    </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import Footer from "../components/Footer";
import GameBox from "../components/GameBox";

export default {
  name: 'Home',
    components: {GameBox, Footer, SearchBar, Header},
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
.content{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 80%;
}
.home{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
