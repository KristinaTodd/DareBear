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
        commit("setRoom", room);
      });
      socket.on("newRoom", room => {
        commit("setRoom", room);
      });
      socket.on("start", room => {
        dispatch("roundView")
      });
      socket.on("startRound", room => {
        dispatch("dareView")
      })
    },

    joinRoom({ commit, dispatch }, roomName) {
      socket.emit("dispatch", { action: "JoinRoom", data: roomName });
    }
  }
};