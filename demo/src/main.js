import Vue from 'vue'
import App from './App.vue'
import VueModernLoader from 'vue-modern-loader'
Vue.use(VueModernLoader, {color: '#41A238'})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
