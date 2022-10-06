import Vue from 'vue'
import Axios from 'axios';
import App from './App.vue'
import VueRouter from 'vue-router'
import Notifications from 'vue-notification'

import login from './components/Login.vue'
import PageNotFound from './components/Page404.vue'
import toDoList from './components/Todo.vue'
import register from './components/Register.vue'
import store from './components/store/index'

Vue.config.productionTip = false
Vue.use(Notifications)
Vue.use(VueRouter);
Vue.use(Axios)

const routes = [
  { path:  '/', component: login },
  { path:  '/login', component: login },
  { path: '/to-do-list', component: toDoList },
  { path: "*", component: PageNotFound},
  { path: '/register', component: register },
];

const router = new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
