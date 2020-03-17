<template>
  <div class="main-font bg-primary">
    <div class="row text-center pt-4">
      <div class="col-1"></div>
      <div class="col-10 info-border text-info pt-2">
        <!-- <h1>{{this.$store.state.room.activePlayer.playerName}}</h1> -->
        <h1>Player Name</h1>
        <img src="../assets/userbear5.png" class="img-width py-4" />
        <!-- <img :src="this.$store.state.room.activePlayer.imgUrl" alt width="5rem" height="5rem" /> -->
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row text-center pt-4">
      <div class="col-1"></div>
      <div class="col-10 info-border text-info pt-2 button-font">
        <span class="small-text">
          Hey PlayerName
          <!--{{this.$store.state.room.activePlayer.playerName}}-->
          this is your dare:
        </span>
        <br />
        <!--{{this.$store.state.room.activeDare.dare}}-->
        spank Tim with a rowing oar!
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row text-center pt-5">
      <div class="col-1"></div>
      <div class="col-10 button-border text-danger button-font">Finished!</div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dare",
  computed: {
    room() {
      return this.$store.state.room;
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
</style>