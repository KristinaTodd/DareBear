<template>
  <div class="bg-primary main-font">
    <Navbar />
    <div class="row text-center pt-2">
      <div class="col-1"></div>
      <div class="col-10 text-info title-border button-font">Enter Your Name!</div>
      <div class="col-1"></div>
    </div>
    <div class="row text-center pt-3">
      <div class="col-1"></div>
      <div class="col-10 text-info">
        <form class>
          <input type="text" class=" pl-1 bg-transparent button-border text-danger input-font" placeholder="Name..."
            v-model="newPlayer.playerName" maxlength="10" />
        </form>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row text-center pt-5">
      <div class="col-1"></div>
      <div class="col-10 text-info title-border button-font">Enter Room Code!</div>
      <div class="col-1"></div>
    </div>
    <div class="row text-center pt-3">
      <div class="col-1"></div>
      <div class="col-10 text-info">
        <form class>
          <input type="number" class="pl-1 bg-transparent button-border text-danger input-font" placeholder="Code..."
            v-model="newRoom.roomCode" />
        </form>
      </div>
      <div class="col-1"></div>
    </div>
    <div @click="addPlayer" class="row text-center button-font start-button">
      <div class="col-1"></div>
      <div class="col-10 button-border text-danger">Join!</div>
      <div class="col-1"></div>
    </div>
  </div>
</template>
<script>
  import Navbar from "../components/navbar";
  export default {
    name: "JoinRoom",
    components: {
      Navbar
    },
    data() {
      return {
        newPlayer: {
          imgUrl: "",
          playerCode: this.$store.state.me
        },
        newRoom: {
          players: []
        }
      };
    },
    computed: {
      players() {
        return this.$store.state.room.players;
      }
    },
    methods: {
      async addPlayer() {
        let payload = this.newRoom;
        this.$store.dispatch("joinRoom", `room${payload.roomCode}`);
        let random = Math.floor(Math.random() * 12);
        this.newPlayer.imgUrl = "assets/userbear" + random + ".png";
        await this.$store.dispatch("getRoom", payload.roomCode);
        payload.players = this.players;
        payload.players.push(this.newPlayer);
        this.$store.dispatch("addPlayer", payload);
        this.$router.push({ name: "WaitingForPlayers" });
      }
    }
  };
</script>
<style>
  .main-font {
    font-family: "Gugi", cursive;
  }

  .title-border {
    border: 3px;
    border-style: solid;
    border-color: #ff2a6d;
  }

  ::placeholder {
    color: #f3739c;
    ;
    opacity: 1;
  }

  .button-font {
    font-size: 2rem;
  }

  .input-font {
    font-size: 1.5rem;

  }

  .button-border {
    border: 3px;
    border-style: solid;
    border-color: #05d9e8;
  }

  .start-button {
    padding-top: 10rem;
  }
</style>