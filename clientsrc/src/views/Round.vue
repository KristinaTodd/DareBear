<template>
  <div v-if="room" class="main-font">
    <div class="row my-2">
      <div class="col-1"></div>
      <div class="col-10 text-info info-border text-center">
        <h1>{{this.room.roomName}}</h1>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row my-2">
      <div class="col-1"></div>
      <div class="col-10 text-info info-border text-center pt-2">
        <h3 v-if="this.room.roundCount != this.room.roundTotal">Round {{this.room.roundCount}}</h3>
        <h3 v-else>FINAL ROUND</h3>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row my-2">
      <div class="col-1"></div>
      <div class="col-10 text-info info-border text-center">
        <span class="text-info tex-center">Be kind! You could end up with your own dare!</span>
        <form @submit.prevent="submitDare">
          <input type="text" class="bg-transparent blue-border text-danger input-font my-2 mr-1"
            placeholder="Enter Your Dare..." v-model="newDare.dare" required />
          <button id="submit" type="submit" class="bg-transparent blue-border text-danger input-font my-2">+</button>
        </form>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row my-2">
      <div class="col-1"></div>
      <div class="col-10 text-info info-border text-center pt-2">
        <h3>{{this.room.dares.length}} / {{this.room.players.length}} Players Ready</h3>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="row blue-border">
          <div class="col-3"></div>
          <div class="col-6 text-danger text-center">
            <h4>Players:</h4>
          </div>
          <div class="col-3"></div>
          <player v-for="(playerObj) in players" :key="playerObj._id" :playerData="playerObj" />
        </div>
      </div>
      <div class="col-1"></div>
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
    data() {
      return {
        newDare: {
          playerCode: this.$store.state.me
        },
        newRoom: {
          dares: [],
          roomCode: this.$store.state.room.roomCode
        }
      };
    },
    computed: {
      room() {
        return this.$store.state.room;
      },
      players() {
        return this.$store.state.room.players;
      }
    },
    methods: {
      submitDare() {
        let payload = this.newRoom;
        payload.dares = this.room.dares;
        payload.dares.push(this.newDare);
        this.$store.dispatch("editDares", payload);
        $("#submit").attr("disabled", true);
        $("#submit").attr("hidden", true);
      }
    },
    mounted() {
      this.$store.dispatch("clearEligible", this.$store.state.room);
    }
  };
</script>
<style scoped>
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