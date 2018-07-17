<template>
    <div class="container">
        <div class="header" v-on:click="attemptGames">
            <div class="cross">
                <div class="cross-vertical"></div>
                <div class="cross-horizontal"></div>
            </div>
            <div class="header-title">
                <h1>GAME INDEX</h1>
            </div>

            <div class="buttons">
                <div class="buttonA"></div>
                <div class="buttonB"></div>
            </div>
        </div>
        <div class="bottomBtns">
            <div class="start"></div>
            <div class="select"></div>
        </div>
    </div>
</template>

<script>
    import SearchBar from "./SearchBar";
    import axios from 'axios'
    export default {
        name: "Header",
        components: {SearchBar},
        methods: {
            attemptGames(){
                this.$store.commit('setLoading', true)
                this.$store.commit('setOnResearch', false)
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
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #067f35;
        width: 100%;
        cursor: pointer;
    }
    h1 {
        font-family: 'Press Start 2P', cursive;
        font-size: 50px;
        margin: 0;
        color: #000;
        text-align: center;
    }
    .header{
        height: 125px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .cross{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 65px;
        margin-right: 50px;
    }
    .cross-vertical{
        background-color: #35ff71;
        height: 65px;
        width: 20px;
        position: absolute;

    }
    .cross-horizontal{
        background-color: #35ff71;
        height: 20px;
        width: 65px;
        position: absolute;
    }
    .bottomBtns {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .start, .select{
        background-color: #35ff71;
        height: 10px;
        width: 50px;
        display: inline-block;
        margin: 0 10px;
    }
    .buttons{
        margin-left: 50px;
    }
    .buttonA, .buttonB{
        background-color: #35ff71;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        display: inline-block;
        margin: 10px;
    }
    .header-title{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
    }

    /*Media query*/
    @media screen and (max-width:724px){
        .buttons, .cross, .bottomBtns{
            display: none;
        }
        .header-title {
            width: 100%;
        }
    }
    @media screen and (max-width: 850px) {
        .cross, .buttons {
            margin: 5px !important;
        }
    }
</style>