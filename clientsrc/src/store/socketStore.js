import io from "socket.io-client";

let socket = {};

export const socketStore = {
  actions: {
    initializeSocket({ commit, dispatch }) {
      //establish connection with socket
      socket = io("//localhost:3000", "https://darebear.herokuapp.com/");
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
    },

    joinRoom({ commit, dispatch }, roomName) {
      socket.emit("dispatch", { action: "JoinRoom", data: roomName });
    }
  }
};