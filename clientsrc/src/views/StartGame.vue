<template>
  <div class="main-font">
    <Navbar />

    <div class="row mx-4 info-border text-info">
      <div class="col-6">
        <h5>Room code:</h5>
      </div>
      <div class="col-6">
        <h2>{{this.roomCode}}</h2>
      </div>
    </div>

    <div class="row pt-3">
      <div class="col-xs-12 mx-4">
        <div class="blue-border">
          <div class="row text-center">
            <div class="col-12">
              <h3 class="text-danger pt-2">Who's in...</h3>
              <div class="row">
                <player class="pb-2" v-for="(playerObj) in players" :key="playerObj._id" :playerData="playerObj" />
              </div>
            </div>
          </div>
        </div>
        <h5 class="text-warning font-italic text-center pt-4">Do Not Start the game until all players have joined.</h5>
      </div>
    </div>
    <div class="row text-center my-2">
      <div class="col-1"></div>
      <div class="col-10 button-border text-danger button-font" @click="start">Start Game</div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
  import Navbar from "../components/navbar";
  import Player from "../components/player";
  export default {
    name: "StartGame",
    components: {
      Navbar,
      Player
    },
    computed: {
      roomCode() {
        return this.$store.state.room.roomCode;
      },
      players() {
        return this.$store.state.room.players;
      }
    },
    methods: {
      async start() {
        let payload = {
          roomCode: this.$store.state.room.roomCode,
          id: this.$store.state.room.id
        };
        await this.$store.dispatch("startGame", payload);
      }
    }
  };
</script>
<style>
  .info-border {
    border: 3px;
    border-style: solid;
    border-color: #ff2a6d;
  }

  .blue-border {
    border: 3px;
    border-style: solid;
    border-color: #05d9e8;
  }
</style>