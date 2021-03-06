import io from "socket.io-client";

let socket = {};

export const socketStore = {
  actions: {
    initializeSocket({ commit, dispatch }) {
      //establish connection with socket
      let url = window.location.host.includes("localhost") ? "//localhost:3000" : "/"
      socket = io(url);
      //Handle any on connection events
      socket.on("CONNECTED", data => {
        console.log("Connected to socket, Do you dare continue");
      });

      //register all listeners
      socket.on("getRoom", room => {
        console.log("setting room from socketstore", "getRoom")
        commit("setRoom", room);
      });
      socket.on("newRoom", room => {
        console.log("setting room from socketstore", "newRoom")
        commit("setRoom", room);
      });
      socket.on("start", room => {
        dispatch("roundView")
      });
      socket.on("startRound", room => {
        dispatch("dareView")
      });
      socket.on("endGame", room => {
        dispatch("endGameView")
      });
      socket.on("endRound", room => {
        dispatch("endRoundView")
      });
      socket.on("endTurn", room => {
        dispatch("endTurnView")
      });
      socket.on("waiting", room => {
        dispatch("waitingView")
      });
      socket.on("modal", room => {
        dispatch("modalView")
      });
      socket.on("updateRoom", room => {
        commit('setRoom', room)
      })
    },

    joinRoom({ commit, dispatch }, roomName) {
      socket.emit("dispatch", { action: "JoinRoom", data: roomName });
    }
  }
};