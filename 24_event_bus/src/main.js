import Vue from 'vue'
import App from './App.vue'

// for nesting globally import in main js
// import Team from './Team.vue'
//
// Vue.component('team', Team);
export const bus = new Vue();
new Vue({
  el: '#app',
  render: h => h(App)
})
