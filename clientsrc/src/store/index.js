import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
import { socketStore } from "./socketStore"
Vue.use(Vuex)

let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

let api = axios.create({
  baseURL: base + "api/",
  timeout: 3000
  // withCredentials: true
})
export default new Vuex.Store({
  state: {
    room: {},
    me: ""
  },
  mutations: {
    setRoom(state, room) {
      state.room = room
    },
    setMe(state, me) {
      state.me = me
    }
  },
  actions: {
    async getRoom({ commit, dispatch }, roomCode) {
      try {
        console.log("getRoom called w/", roomCode)
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
        commit("setMe", payload.players[0].playerCode)
      } catch (error) {
        console.error(error)
      }
    },
    async createRoom({ commit, dispatch, state }, payload) {
      try {
        let res = await api.post("room/", payload);
        dispatch("getRoom", res.data.roomCode);
        commit("setMe", payload.playerCode)
        console.log("playerCode", state.me)
      } catch (error) {
        console.error(error);
      }
    },
    async startGame({ commit, dispatch }, payload) {
      try {
        let res = await api.put("room/" + payload.id + '/start', payload)
      } catch (error) {
        console.error(error)
      }
    },
    async getPlayersbyRoomId({ commit, dispatch }, roomCode) {
      try {
        let res = await api.get("room/" + roomCode + "/players")
        dispatch("getRoom", roomCode)
      } catch (error) {
        console.error(error)
      }
    },
    async editDares({ commit, dispatch, state }, payload) {
      try {
        let res = await api.post("room/" + state.room.id + "/dares", payload.dares)
        dispatch("getRoom", payload.roomCode)
      } catch (error) {
        console.error(error)
      }
    },
    async editActive({ commit, dispatch, state }, payload) {
      try {
        let res = await api.put("room/" + state.room.id, payload)
        dispatch("getRoom", payload.roomCode)
      } catch (error) {
        console.error(error)
      }
    },
    roundView({ commit, dispatch }) {
      router.push({ name: "Round" });
    },

    async scorePlayer({ commit, dispatch }, payload) {
      try {
        let res = await api.put("room/" + payload.id + "/players/" + payload.playerId, payload)
        dispatch("getRoom", payload.roomCode)
      } catch (error) {
        console.error(error)
      }
    },
    async updateScored({ commit, dispatch }, payload) {
      let res = await api.put("room/" + payload.id + "/updatescored")
    },

    dareView({ commit, dispatch }) {
      router.push({ name: "Dare" });
    }

  },
  modules: {
    socketStore
  }
})
