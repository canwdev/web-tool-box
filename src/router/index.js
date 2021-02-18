import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import('../views/Counter.vue')
  },
  {
    path: '/object-size',
    name: 'ObjectSize',
    component: () => import('../views/ObjectSize.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
