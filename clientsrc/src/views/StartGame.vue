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

    <div class="row">
      <div class="col-xs-12 mx-4">
        <h5 class="text-warning">
          Do Not Start the game until all players have joined. (You'll miss out on really cool
          dares)
        </h5>
        <div class="info-border">
          <div class="row">
            <div class="col-12">
              <p class="text-info">Who's in...</p>
              <p class="text-white">
                NOTE Need to generate player icons and usernames vertically for each player in store
                player array...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center my-5">
      <div class="col-1"></div>
      <div class="col-10 button-border text-danger button-font" @click="start">Start Game</div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
  import Navbar from "../components/navbar";
  export default {
    name: "StartGame",
    mounted() {
      this.$store.dispatch("getRoom", this.$store.state.room.roomCode);

    },
    components: {
      Navbar
    },
    computed: {
      roomCode() {
        return this.$store.state.room.roomCode;
      }
    },
    methods: {
      async start() {
        console.log(this.$store.state.room)
        let payload = {
          roomCode: this.$store.state.room.roomCode,
          id: this.$store.state.room.id
        }
        await this.$store.dispatch("startGame", payload)
        // this.$store.dispatch("start", `room${payload.roomCode}`)
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
</style>