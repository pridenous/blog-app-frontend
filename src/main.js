import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Home from './components/Home.vue';
import Users from './components/Users.vue';
import Posts from './components/Posts.vue';

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(require('vue-moment'))
const routes = [
  {
    path: '/users',
    name: Users,
    component: Users
  },
  {
    path: '/',
    name: 'Home',
    redirect: "/posts",
    component: Home,
    children: [
      {
        path: "/posts",
        name: "posts",
        component: Posts
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
