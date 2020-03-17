<template>
  <div>
    <div class="row">
      <div class="col-12 text-info info-border">{{this.room.roomName}}</div>
    </div>
    <div class="row">
      <div
        class="col-12 text-info info-border"
      >Round #{{this.room.roundCount}}/{{this.room.roundTotal}}</div>
    </div>
    <div class="row">
      <div class="col-12 text-info info-border">{{this.room.eligiblePlayers}}/{{this.room.players}}</div>
    </div>
    <div class="row">
      <player v-for="(playerObj) in players" :key="playerObj._id" :playerData="playerObj" />
    </div>
  </div>
</template>
<script>
import player from "../components/player.vue";
export default {
  name: "Round",
  components: {
    player
  },
  computed: {
    room() {
      return this.$store.state.room;
    },
    players() {
      return this.$store.state.room.players;
    }
  }
};
</script>
<style scoped>
</style>