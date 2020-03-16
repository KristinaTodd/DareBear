<template>
  <div class="bg-primary main-font">
    <Navbar />
    <div class="row text-center">
      <div class="col-1"></div>
      <div class="col-10 info-border text-info button-font">{{this.$store.state.room.roomName}}</div>
      <div class="col-1"></div>
    </div>
    <div class="row text-center py-2">
      <div class="col-1"></div>
      <div class="col-10 info-border text-info button-font">Waiting For Other Players...</div>
      <div class="col-1"></div>
    </div>
    <div class="row">
      <player v-for="(playerObj) in players" :key="playerObj._id" :playerData="playerObj" />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbar";
import Player from "../components/player";
export default {
  name: "WaitingForPlayers",
  components: {
    Navbar,
    Player
  },
  computed: {
    players() {
      return this.$store.state.room.players;
    }
  }
};
</script>

<style>
.main-font {
  font-family: "Gugi", cursive;
}
</style>