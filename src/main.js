import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import FilterItem from './components/FilterItem'
import Footer from './components/Footer'
import GameBox from './components/GameBox'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

Vue.config.productionTip = false
Vue.use(Vuex)
// Vue.http.headers.common['Access-Control-Allow-Origin'] = true
// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
// Vue.http.headers.common['Access-Control-Allow-Origin'] = 'localhost:8080'
const store = new Vuex.Store({
    state: {
        games:[]
    },
    mutations:{
        setGames (state, games){
          state.games = games
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
  },
  store,

}).$mount('#app')
