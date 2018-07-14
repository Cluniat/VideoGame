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
        <i class="fa fa-search" v-on:click="toggleSearchInput"></i>
    </div>
    <div class="searchInput" v-if="toggleSearch">
        <input type="text" placeholder="Recherche..."/>
    </div>
    </div>
</template>

<script>
    import FilterItem from "./FilterItem";
    export default {
        name: "SearchBar",
        components: {FilterItem},
        data() {
            return {
                toggleSearch: false
            }
        },
        methods: {
            toggleSearchInput: function(){
                this.toggleSearch = !this.toggleSearch
            }
        }
    }
</script>

<style scoped>
.search{
    background-color: #7F0707;
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: #ffffff;
}
.searchInput{
    background-color: rgba(0,0,0,0.3);
    height: 100px;
    width: 100%;
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
</style>