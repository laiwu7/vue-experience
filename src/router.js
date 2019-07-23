import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import InputExp from './views/Input.vue';
import ButtonExp from './views/Button.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/input',
      name: 'input',
      component: InputExp
    },
    {
      path: '/button',
      name: 'button',
      component: ButtonExp
    }
  ]
})
