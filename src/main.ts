import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

declare global {
  interface Window { appSettings: any; }
}

new Vue({
  render: h => h(App),
}).$mount('#app')
