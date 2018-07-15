<template>
    <div class="filterItem" v-on:click="alphabet">
        <i v-if="!isFirst">  |  </i>
    <a> {{letter}}  </a>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "FilterItem",
        props: {
         letter: String,
         isFirst: {
             default: false,
         }
        },
        computed:{
            loading(){
                return this.$store.state.loading
            }
        },
        methods:{
            alphabet(){
                this.$store.commit('setLoading', true)
                var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
                axios.get(proxyUrl+'https://api-endpoint.igdb.com/games/?filter[name][prefix]='+this.letter+'&fields=*', {
                    headers: {
                        'user-key': '737bc70227de8d102078bcc22c8992a7',
                        Accept: 'application/json',
                        // 'Access-Control-Allow-Origin': '*',
                        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    },
                })
                    .then(response => {
                        // Do work here
                        this.$store.commit('setGames', response.data)
                        this.$store.commit('setLoading', false)
                    })
                    .catch(e => {
                        /* eslint-disable */
                        console.log(e)
                        // alert(e);
                    });
            }
         }
    }

</script>

<style scoped>
.filterItem{
    display: inline-block;
    cursor: pointer;
    color: #067f35;
}
i{
    margin: 0 3px;
}
.filterItem:hover a{
    color: #35ff71;
}    
</style>