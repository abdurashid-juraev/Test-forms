import Vue from 'vue'
import App from './App.vue'
import Header from './components/header_footer/header.vue'
import Footer from './components/header_footer/footer.vue'

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
