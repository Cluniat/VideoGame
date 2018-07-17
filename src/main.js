import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import FilterItem from './components/FilterItem'
import Footer from './components/Footer'
import GameBox from './components/GameBox'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Modal from './components/Modal'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        games:[],
        toggleModal: false,
        details:['title','img','summary'],
        loading: true,
        onResearch: false
    },
    mutations:{
        setGames (state, games){
          state.games = games
        },
        addGames(state, games){
            state.games = state.games.concat(games)
        },
        setToggleModal(state){
            state.toggleModal = !state.toggleModal
        },
        setDetails(state, details){
            state.details = details
        },
        setLoading(state, loading) {
            state.loading = loading
        },
        setOnResearch(state, onResearch){
            state.onResearch = onResearch
        }
    }
})

new Vue({
  render: h => h(App),
  components: {
    FilterItem,
    Footer,
    GameBox,
    Header,
    SearchBar,
    Modal
  },
  store,

}).$mount('#app')
