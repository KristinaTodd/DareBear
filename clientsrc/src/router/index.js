import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import JoinRoom from '../views/JoinRoom.vue'
import CreateRoom from '../views/CreateRoom.vue'
import StartGame from '../views/StartGame.vue'
import WaitingForPlayers from "../views/WaitingForPlayers.vue"
import Round from "../views/Round.vue"
import Dare from "../views/Dare.vue"
import Waiting from "../views/Waiting.vue"
import GameOver from "../views/GameOver.vue"


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
    path: '/waitingforplayers',
    name: 'WaitingForPlayers',
    component: WaitingForPlayers
  },
  {
    path: '/startgame',
    name: 'StartGame',
    component: StartGame
  },
  {
    path: '/round',
    name: 'Round',
    component: Round
  },
  {
    path: '/dare',
    name: 'Dare',
    component: Dare
  },
  {
    path: '/waiting',
    name: 'Waiting',
    component: Waiting
  },
  {
    path: '/gameover',
    name: 'GameOver',
    component: GameOver
  }
]

const router = new VueRouter({
  routes
})

export default router
