import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// Vue.http.headers.common['Access-Control-Allow-Origin'] = true
// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
// Vue.http.headers.common['Access-Control-Allow-Origin'] = 'localhost:8080'

new Vue({
  render: h => h(App),
  data:{
    research:''
  }
}).$mount('#app')
