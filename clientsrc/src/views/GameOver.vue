<template>
  <div class="bg-primary main-font">
    <div class="row text-center pt-3">
      <div class="col-1"></div>
      <div class="col-10 info-border text-info button-font">{{this.$store.state.room.roomName}}</div>
      <div class="col-1"></div>
    </div>
    <div class="row text-center py-2">
      <div class="col-1"></div>
      <div class="col-10 info-border text-info button-font">Game Over Man!</div>
      <div class="col-1"></div>
    </div>
    <div class="row">
      <player v-for="(playerObj) in players" :key="playerObj._id" :playerData="playerObj" />
    </div>
    <div class="row text-center">
      <div class="col-1"></div>
      <div class="col-10 button-border text-danger button-font" @click="finish">Leave Game</div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import Player from "../components/player";
export default {
  name: "WaitingForPlayers",
  components: {
    Player
  },
  computed: {
    players() {
      return this.$store.state.room.players;
    }
  },
  methods: {
    finish() {
      this.$store.dispatch("done");
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style>
.main-font {
  font-family: "Gugi", cursive;
}
</style>