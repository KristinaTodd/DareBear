<template>
  <div v-if="room" class="main-font bg-primary">
    <div class="row text-center pt-4">
      <div class="col-1"></div>
      <div class="col-10 info-border text-info pt-2">
        <!-- <h1>{{this.$store.state.room.activePlayer[0].playerName}}</h1> -->
        <!-- <h1>Player Name</h1> -->
        <img src="../assets/userbear5.png" class="img-width py-4" />
        <!-- <img :src="this.$store.state.room.activePlayer[0].imgUrl" alt width="5rem" height="5rem" /> -->
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row text-center pt-4">
      <div class="col-1"></div>
      <div class="col-10 info-border text-info pt-2 button-font">
        <span class="small-text">
          Hey
          <!-- {{this.$store.state.room.activePlayer[0].playerName}} -->
          this is your dare:
        </span>
        <br />
        {{this.$store.state.room.activeDare[0].dare}}
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row text-center pt-5">
      <div class="col-1"></div>
      <div v-show="this.me.localPlayerCode == this.$store.state.room.activePlayer[0].playerCode"
        class="col-10 button-border text-danger button-font" @click="modal">Finished!</div>
      <div class="col-1"></div>
    </div>

    <div class="modal fade" id="score-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body bg-primary text-danger">
            <div class="row text-center">
              <div class="col-12 title-font">Score That Dare!</div>
            </div>
            <div class="row text-center pt-4 pb-4 score-font">
              <div class="col-4">
                <span class="button-border p-2" @click="score(1)">1</span>
              </div>
              <div class="col-4">
                <span class="button-border p-2" @click="score(2)">2</span>
              </div>
              <div class="col-4">
                <span class="button-border p-2" @click="score(3)">3</span>
              </div>
            </div>
            <div class="row text-center pt-4 pb-4 score-font">
              <div class="col-4">
                <span class="button-border p-2" @click="score(4)">4</span>
              </div>
              <div class="col-4">
                <span class="button-border p-2" @click="score(5)">5</span>
              </div>
              <div class="col-4">
                <span class="button-border p-2" @click="score(6)">6</span>
              </div>
            </div>
            <div class="row text-center pt-4 pb-4 score-font">
              <div class="col-4">
                <span class="button-border p-2" @click="score(7)">7</span>
              </div>
              <div class="col-4">
                <span class="button-border p-2" @click="score(8)">8</span>
              </div>
              <div class="col-4">
                <span class="button-border p-2" @click="score(9)">9</span>
              </div>
            </div>
            <div class="row text-center pt-4 pb-4 score-font">
              <div class="col-4"></div>
              <div class="col-4">
                <span class="button-border p-2" @click="score(10)">10</span>
              </div>
              <div class="col-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Dare",
    mounted() {
      //this.$store.dispatch("getRoom", this.$store.state.room.roomCode);
      // console.log("heres our room on this page", this.$store.state.room);
    },
    computed: {
      room() {
        return this.$store.state.room;
      },
      localPlayerCode() {
        let me = JSON.parse(window.localStorage.getItem("localPlayerCode"))
        return me
      },
      activePlayer() {
        return this.$store.state.room.activePlayer[0];
      }
    },
    data() {
      return {
        player: {
          playerId: this.$store.state.room.activePlayer.id,
          id: this.$store.state.room.id,
          roomCode: this.$store.state.room.roomCode,
          playerCode: this.$store.state.me
        }
      };
    },
    methods: {
      async modal() {
        this.$store.dispatch("modal");
      },
      async score(num) {
        this.player.score = num;
        console.log("Score is", this.player.score);
        let payload = this.player;
        await this.$store.dispatch("scorePlayer", this.player);
        await this.$store.dispatch("updateScored", this.player);
        if (
          this.$store.state.room.scored.length ==
          this.$store.state.room.players.length - 1 &&
          this.$store.state.room.roundCount ==
          this.$store.state.room.roundTotal &&
          this.$store.state.room.eligiblePlayers.length == 0
        ) {
          this.$store.dispatch("endGame", payload);
        } else if (
          this.$store.state.room.scored.length ==
          this.$store.state.room.players.length - 1 &&
          this.$store.state.room.eligiblePlayers.length == 0
        ) {
          await this.$store.dispatch("updateScored", payload);
          this.$store.dispatch("endRound", payload);
        } else if (
          this.$store.state.room.scored.length ==
          this.$store.state.room.players.length - 1
        ) {
          await this.$store.dispatch("updateScored", payload);
          this.$store.dispatch("endTurn", payload);
          this.$store.dispatch("editActive", payload);
        } else {
          this.$store.dispatch("waitingView");
        }
      }
    }
  };
</script>

<style>
  .info-border {
    border: 5px;
    border-style: solid;
    border-color: #ff2a6d;
  }

  .button-border {
    border: 3px;
    border-style: solid;
    border-color: #05d9e8;
  }

  .button-font {
    font-size: 2rem;
  }

  .main-font {
    font-family: "Gugi", cursive;
  }

  .img-width {
    width: 14rem;
  }

  .small-text {
    font-size: 1.2rem;
  }

  .title-font {
    font-size: 2rem;
  }

  .score-font {
    font-size: 4rem;
  }
</style>