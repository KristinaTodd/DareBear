import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
Vue.use(Vuex)

let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

let api = axios.create({
  baseURL: base + "api/",
  timeout: 300000
  // withCredentials: true
})
export default new Vuex.Store({
  state: {
    room: {}
  },
  mutations: {
    setRoom(state, room) {
      state.room = room
    }
  },
  actions: {
    async getRoom({ commit, dispatch, state }, roomCode) {
      try {
        let res = await api.get("room/" + roomCode)
        commit("setRoom", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addPlayer({ commit, dispatch, state }, payload) {
      try {
        let res = await api.post("room/" + state.room.id + "/newPlayer", payload.players)
        dispatch("getRoom", payload.roomCode)
      } catch (error) {
        console.error(error)
      }
    },
    async createRoom({ commit, dispatch }, payload) {
      try {
        let res = await api.post("room/", payload)
        dispatch("getRoom", payload.roomCode)
      } catch (error) {
        console.error(error)
      }
    },
    async startGame({ commit, dispatch }, payload) {
      try {
        let res = await api.put('/start', payload)
        dispatch("getRoom", payload.roomCode)
      } catch (error) {
        console.error(error)
      }
    },
    async getPlayersbyRoomId({ commit, dispatch }, roomId) {
      try {
        let res = await api.get("room/" + roomId + "/players")
        dispatch("getRoom", roomId)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
