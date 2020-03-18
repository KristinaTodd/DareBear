<template>
  <div class="bg-primary main-font">
    <div class="row text-center pt-3">
      <div class="col-1"></div>
      <div class="col-10 info-border text-info button-font">{{this.$store.state.room.roomName}}</div>
      <div class="col-1"></div>
    </div>
    <div class="row text-center py-2">
      <div class="col-1"></div>
      <div class="col-10 info-border text-info button-font">Waiting For All Scores...</div>
      <div class="col-1"></div>
    </div>
    <div class="row">
      <player v-for="(playerObj) in scored" :key="playerObj._id" :playerData="playerObj" />
    </div>
  </div>
</template>

<script>
import Player from "../components/player";
export default {
  name: "Waiting",
  components: {
    Player
  },
  computed: {
    scored() {
      return this.$store.state.room.scored;
    }
  }
};
</script>

<style>
.main-font {
  font-family: "Gugi", cursive;
}
</style>