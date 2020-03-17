<template>
  <div class="main-font">
    <Navbar />
    <div class="row text-center pt-2">
      <div class="col-1"></div>
      <div class="col-10 text-info info-border button-font">Enter Your Name!</div>
      <div class="col-1"></div>
    </div>
    <div class="row text-center pt-3">
      <div class="col-1"></div>
      <div class="col-10 text-info">
        <form>
          <input
            type="text"
            class="bg-transparent button-border text-danger input-font"
            placeholder="name..."
            v-model="player.playerName"
            required
            maxlength="10"
          />
        </form>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row text-center pt-5">
      <div class="col-1"></div>
      <div class="col-10 text-info info-border button-font">How Many Rounds?</div>
      <div class="col-1"></div>
    </div>
    <div class="row text-center pt-3">
      <div class="col-3"></div>
      <div class="col-6 text-center">
        <form>
          <div class="form-group">
            <select
              v-model="newRoom.roundTotal"
              class="form-control text-danger bg-transparent button-border"
              placeholder="Choose"
              required
            >
              <option class="bg-primary">1</option>
              <option class="bg-primary">2</option>
              <option class="bg-primary">3</option>
              <option class="bg-primary">4</option>
              <option class="bg-primary">5</option>
            </select>
          </div>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row text-center pt-5">
      <div class="col-1"></div>
      <div class="col-10 text-info info-border button-font">Enter A Name For Your Room!</div>
      <div class="col-1"></div>
    </div>
    <div class="row text-center pt-3">
      <div class="col-1"></div>
      <div class="col-10 text-info">
        <form class>
          <input
            type="text"
            class="bg-transparent button-border text-danger input-font"
            placeholder="room name..."
            v-model="newRoom.roomName"
            required
            maxlength="15"
          />
        </form>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row text-center py-5">
      <div class="col-1"></div>
      <div
        class="col-10 button-border text-danger text-center button-font"
        @click="createRoom"
      >Create Room!</div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
  import Navbar from "../components/navbar";
  export default {
    name: "createroom",
    components: {
      Navbar
    },
    data() {
      return {
        newRoom: {
          roomCode: Math.floor(Math.random() * 10000),
          roundTotal: "",
          roomName: "",
          players: []
        },
        player: {
          playerName: "",
          creator: true,
          imgUrl: `assets/userbear${Math.floor(Math.random() * 12)}.png`
        }
      };
    },
    methods: {
      createRoom() {
        let playerCode = Math.floor(Math.random() * 100000000);
        this.player.playerCode = playerCode;
        this.newRoom.playerCode = playerCode;
        this.newRoom.players.push(this.player);
        this.$store.dispatch("createRoom", this.newRoom);
        this.$store.dispatch("joinRoom", `room${this.newRoom.roomCode}`);
        this.$router.push({
          name: "StartGame",
          params: { roomCode: this.newRoom.roomCode }
        });
      }
    };
  }
</script>
<style scoped>
.main-font {
  font-family: "Gugi", cursive;
}

.info-border {
  border: 3px;
  border-style: solid;
  border-color: #ff2a6d;
}

::placeholder {
  color: #f3739c;
  opacity: 1;
}

.button-font {
  font-size: 2rem;
}

.input-font {
  font-size: 1.5rem;
  padding-left: 1rem;
}

.button-border {
  border: 3px;
  border-style: solid;
  border-color: #05d9e8;
}

select {
  width: 10rem;
}
</style>