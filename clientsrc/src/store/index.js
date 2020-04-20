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
      } catch (error) {
        console.error(error)
      }
    },
    async createRoom({ commit, dispatch, state }, payload) {
      try {
        let res = await api.post("room/", payload);
        commit("setRoom", res.data);
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
        //dispatch("getRoom", roomCode)
      } catch (error) {
        console.error(error)
      }
    },
    async editDares({ commit, dispatch, state }, payload) {
      try {
        let res = await api.post("room/" + state.room.id + "/dares", payload.dares)
        if (state.room.dares.length == state.room.players.length) {
          await dispatch("editActive", payload);
          console.log("checking editdares", state.room)
          await dispatch("editEligible", payload);
          console.log("once more, with feeling", state.room)
        }
        // dispatch("getRoom", payload.roomCode)
      } catch (error) {
        console.error(error)
      }
    },


    async editEligible({ commit, dispatch, state }, payload) {
      try {
        let res = await api.put("room/" + state.room.id + "/eligiblePlayers", payload)
      } catch (e) {
        console.error(e)
      }
    },
    async editActive({ commit, dispatch, state }, payload) {
      try {
        let res = await api.put("room/" + state.room.id + "/active", payload)
        //await dispatch("getRoom", payload.roomCode)
        console.log("heres your active player", res)
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
      //dispatch("getRoom", payload.roomCode)
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
    async pusher({ commit, dispatch, state }, payload) {
      if (
        await state.room.scored.length ==
        await state.room.players.length - 1 &&
        await state.room.roundCount == await state.room.roundTotal &&
        await state.room.eligiblePlayers.length == 0
      ) {
        dispatch("endGame", payload);
      } else if (
        await state.room.scored.length ==
        await state.room.players.length - 1 &&
        await state.room.eligiblePlayers.length == 0
      ) {
        dispatch("endRound", payload);
      } else if (
        await state.room.scored.length ==
        await state.room.players.length - 1
      ) {
        dispatch("mountedMethod", payload);
      }
    },
    //NOTE action with promise
    // load({dispatch, commit}, payload) {
    //   return new Promise(async (res, rej) => {
    //     try{
    //    let result = await axios.get("/api/customers")
    //        commit("setCustomers", result.data);
    //         res();
    //     }catch(err){rej()};
    //   });
    // },
    async endRound({ commit, dispatch }, payload) {
      try {
        await dispatch("editEligible", payload);
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
    async endTurnView({ commit, dispatch, state }) {
      await dispatch("getRoom", state.room.roomCode);
      router.push({ name: "Dare" }).catch(error => { });
    },
    waitingView({ commit, dispatch, state }) {
      router.push({ name: "Waiting" }).catch(error => { });
    },
    async modal({ commit, dispatch }, payload) {
      let res = await api.put("room/" + payload.id + "/modal", payload)
    },
    modalView({ commit, dispatch, state }) {
      if (state.me != state.room.activePlayer.playerCode) {
        $('#score-modal').modal('toggle')
      }
    },
    async mountedMethod({ commit, dispatch }, payload) {
      await dispatch("editActive", payload)
      await dispatch("editEligible", payload)
      await dispatch("endTurn", payload)
    },
    async clearEligible({ commit, dispatch, state }, payload) {
      try {
        let res = await api.put("room/" + state.room.id + "/clearEligible", payload)
      } catch (e) {
        console.error(e)
      }
    }
  },
  modules: {
    socketStore
  }
})
