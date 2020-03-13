import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import JoinRoom from '../views/JoinRoom.vue'
import CreateRoom from '../views/CreateRoom.vue'
import StartGame from '../views/StartGame.vue'


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
  },
  {

    path: '/createroom',
    name: 'CreateRoom',
    component: CreateRoom
  },
  {
    path: '/startgame',
    name: 'StartGame',
    component: StartGame

  }
]

const router = new VueRouter({
  routes
})

export default router
