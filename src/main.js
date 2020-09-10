import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import firebase from "./firebaseConfig";

import './filters'
import './directives'
import Routes from './routes'

Vue.use(VueRouter)
Vue.prototype.$db = firebase.firestore();
Vue.prototype.$http = Axios
export const bus = new Vue({});

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
