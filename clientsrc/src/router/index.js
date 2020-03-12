import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import JoinRoom from "../views/JoinRoom"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/joinroom',
    name: 'JoinRoom',
    component: JoinRoom
  }
]
const router = new VueRouter({
  routes
})


export default router
