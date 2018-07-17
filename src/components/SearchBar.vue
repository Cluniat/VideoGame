<template>
    <div>
    <div class="search">
        <div class="filter">
        <FilterItem letter="A" isFirst="true"/>
        <FilterItem letter="B"/>
        <FilterItem letter="C"/>
        <FilterItem letter="D"/>
        <FilterItem letter="E"/>
        <FilterItem letter="F"/>
        <FilterItem letter="G"/>
        <FilterItem letter="H"/>
        <FilterItem letter="I"/>
        <FilterItem letter="J"/>
        <FilterItem letter="K"/>
        <FilterItem letter="L"/>
        <FilterItem letter="M"/>
        <FilterItem letter="N"/>
        <FilterItem letter="O"/>
        <FilterItem letter="P"/>
        <FilterItem letter="Q"/>
        <FilterItem letter="R"/>
        <FilterItem letter="S"/>
        <FilterItem letter="T"/>
        <FilterItem letter="U"/>
        <FilterItem letter="V"/>
        <FilterItem letter="W"/>
        <FilterItem letter="X"/>
        <FilterItem letter="Y"/>
        <FilterItem letter="Z"/>
        </div>
        <i class="fa fa-search" v-on:click="toggleSearchInput" ></i>
    </div>
        <transition name="search-fade">
            <div class="searchInput" v-if="toggleSearch">
                <input type="text" placeholder="Recherche..." v-model="research" v-on:keyup.enter="search(research)" :autofocus="toggleSearch"/>
            </div>
        </transition>

    </div>
</template>

<script>
    import FilterItem from "./FilterItem";
    import axios from 'axios'
    export default {
        name: "SearchBar",
        components: {FilterItem},
        data() {
            return {
                toggleSearch: false,
                research:''
            }
        },
        methods: {
            toggleSearchInput: function(){
                this.toggleSearch = !this.toggleSearch
            },
            search:function (research) {
                this.$store.commit('setOnResearch',true)
                var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
                axios.get(proxyUrl+'https://api-endpoint.igdb.com/games/?search='+ research+'&fields=*', {
                    headers: {
                        'user-key': '737bc70227de8d102078bcc22c8992a7',
                        Accept: 'application/json',
                    },
                })
                .then(response => {
                    this.$store.commit('setGames', response.data)
                })
                .catch(e => {
                    alert(e);
                });
            },
        }
    }
</script>

<style scoped>
    .search{
        background-color: black;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        color: #35ff71;
        text-align: center;
    }
    .searchInput{
        background-color: #000;
        height: 100px;
        width: 100%;
    }
    .fa-search{
        cursor: pointer;
    }
    .fa-search:hover{
        color: white;
    }
    input{
        background-color: transparent;
        border: none;
        height: 100%;
        width: 100%;
        padding-left: 20px;
        font-size: 40px;
        color: white;
    }
    input:focus{
        outline: none;
    }
    .filter{
        padding-right: 10px;
    }
    .search-fade-enter,
    .search-fade-leave-active {
        opacity: 0;
    }
    .search-fade-enter-active,
    .search-fade-leave-active {
        transition: opacity .5s ease
    }

</style>