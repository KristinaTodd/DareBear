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
      <div class="col-12">
        <div class="row mt-2 mb-2">
          <div class="col-1"></div>
          <div class="col-3">
            <img class="imgSize" :src="require(`../${activePlayerData.imgUrl}`)" alt />
          </div>
          <div class="col-7 info-border">
            <h5 class="text-info card-padding">
              {{activePlayerData.playerName}}
              <span
                class="float-right"
              >Score: {{activePlayerData.playerScore}}</span>
            </h5>
            <!-- <h5 class="text-info">Score: {{playerData.playerScore}}</h5> -->
          </div>
          <div class="col-1"></div>
        </div>
      </div>
      <player v-for="(playerObj) in scored" :key="playerObj._id" :playerData="playerObj" />
    </div>
  </div>
</template>

<script>
import Player from "../components/player";
export default {
  name: "Waiting",
  mounted() {
    let payload = {
      playerId: this.$store.state.room.activePlayer[0]._id,
      id: this.$store.state.room._id,
      roomCode: this.$store.state.room.roomCode,
      playerCode: this.$store.state.room.activePlayer[0].playerCode,
      me: this.$store.state.me
    };

    if (
      this.$store.state.room.scored.length ==
        this.$store.state.room.players.length - 1 &&
      this.$store.state.room.roundCount == this.$store.state.room.roundTotal &&
      this.$store.state.room.eligiblePlayers.length == 0
    ) {
      this.$store.dispatch("endGame", payload);
    } else if (
      this.$store.state.room.scored.length ==
        this.$store.state.room.players.length - 1 &&
      this.$store.state.room.eligiblePlayers.length == 0
    ) {
      this.$store.dispatch("endRound", payload);
    } else if (
      this.$store.state.room.scored.length ==
      this.$store.state.room.players.length - 1
    ) {
      this.$store.dispatch("mountedMethod", payload);
    }
  },
  components: {
    Player
  },
  computed: {
    scored() {
      return this.$store.state.room.scored;
    },
    activePlayerData() {
      return this.$store.state.room.activePlayer[0];
    }
  }
};
</script>

<style>
.main-font {
  font-family: "Gugi", cursive;
}

.imgSize {
  height: 3rem;
  width: 3rem;
}
</style>