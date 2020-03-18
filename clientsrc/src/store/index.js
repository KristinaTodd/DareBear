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
        let res = await api.put("room/" + state.room.id + "/active", payload)
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
      } catch (error) {
        console.error(error)
      }
    },
    async updateScored({ commit, dispatch }, payload) {
      let res = await api.put("room/" + payload.id + "/updatescored", payload)
      dispatch("getRoom", payload.roomCode)
    },

    dareView({ commit, dispatch }) {
      router.push({ name: "Dare" });
    },
    async endGame({ commit, dispatch }, payload) {
      try {
        let res = await api.put("room/" + payload.id + '/endgame', payload)
      } catch (error) {
        console.error(error)
      }
    },
    async endRound({ commit, dispatch }, payload) {
      try {
        let res = await api.put("room/" + payload.id + '/endround', payload)
      } catch (error) {
        console.error(error)
      }
    },
    async endTurn({ commit, dispatch }, payload) {
      try {
        let res = await api.put("room/" + payload.id + '/endturn', payload)
      } catch (error) {
        console.error(error)
      }
    },
    endGameView({ commit, dispatch }) {
      router.push({ name: "GameOver" });
    },
    endRoundView({ commit, dispatch }) {
      router.push({ name: "Round" });
    },
    endTurnView({ commit, dispatch }) {
      router.push({ name: "Dare" });
    },
    waitingView({ commit, dispatch }) {
      router.push({ name: "Waiting" });
    },
    async modal({ commit, dispatch }, payload) {
      let res = await api.put("room/" + payload.id + "/modal", payload)
    },
    modalView({ commit, dispatch }) {
      $('#score-modal').modal('toggle')
    }
  },
  modules: {
    socketStore
  }
})
