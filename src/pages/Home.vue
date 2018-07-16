<template>
  <div class="home">
    <Modal v-if="toggleModal"/>
    <Header/>
    <SearchBar/>
    <div class="content">
    <Loading v-if="loading"/>
    <div v-if="!loading" v-for="game in games">
        <GameBox :title="game.name" :img_url="game.cover?'//images.igdb.com/igdb/image/upload/t_cover_big/'+game.cover.cloudinary_id:'http://www.loudoweb.fr/images/me_manette_grand.png'" :summary="game.summary?game.summary:'No description available for this game'"/>
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
import Modal from "../components/Modal";
import Loading from "../components/Loading";

export default {
    name: 'Home',
    components: {Loading, Modal, GameBox, Footer, SearchBar, Header},
    props: {
        msg: String
    },
    mounted: function() {
       this.attemptGames()
    },
    computed:{
        games(){
            return this.$store.state.games
        },
        toggleModal(){
            return this.$store.state.toggleModal
        },
        loading(){
            return this.$store.state.loading
        }
    },
    methods: {
        attemptGames(){
            var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
            axios.get(proxyUrl+'https://api-endpoint.igdb.com/games/?fields=*&order=popularity:desc&limit=50&scroll=1', {
                headers: {
                    'user-key': '737bc70227de8d102078bcc22c8992a7',
                    Accept: 'application/json',
                },
            })
                .then(response => {
                    this.$store.commit('setGames', response.data)
                    this.$store.commit('setLoading', false)

                })
                .catch(e => {
                    alert(e);
                });
        }
    }
}
</script>

<style scoped>
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
        padding-bottom: 75px;
    }
</style>
