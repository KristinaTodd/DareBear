import io from "socket.io-client";

let socket = {};

export const socketStore = {
  actions: {
    initalizeSocket({ commit, dispatch }) {
      //establish connection with socket
      socket = io("//localhost:3000");
      //Handle any on connection events
      socket.on("CONNECTED", data => {
        console.log("Connected to socket, Do you dare continue");
      });

      //register all listeners
      socket.on("newRoom", room => {
        commit("addRoom", room);
      });
    },

    joinRoom({ commit, dispatch }, roomName) {
      socket.emit("dispatch", { action: "JoinRoom", data: roomName });
    }
  }
};