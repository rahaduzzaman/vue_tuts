import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './route';

Vue.use(VueResource);
Vue.use(VueRouter);

const route= new VueRouter({
  routes: Routes,
  mode:'history'
});
//Mode is for ignoring hash in the navigation bar
// use hash other than history to see hash in navigation bar
new Vue({
  el: '#app',
  render: h => h(App),
  router: route
})
