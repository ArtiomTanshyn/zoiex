import Vue from 'vue'
import VueRouter from 'vue-router'
import ListGifs from '../views/ListGifs.vue'
import SingleGif from '../views/SingleGif.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ListGifs,
    props: true,
  },
  {
    path: '/:id',
    name: 'single',
    component: SingleGif,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
