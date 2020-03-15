<template>
  <div class="bg-primary main-font">
    <Navbar />
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10 info-border text-info button-font">Waiting For Others To Connect</div>
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
    // mounted() {
    //   this.$store.dispatch("getPlayersbyRoomId", this.$route.params.id)
    // },
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