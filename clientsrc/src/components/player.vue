<template>
  <div class="col-12">
    <div class="media">
      <img class="mr-3" :src="playerData.imgUrl" alt="Generic placeholder image" />
      <div class="media-body">
        <h5 class="mt-0">{{playerData.playerName}}</h5>
        <h5 class="mt-0">Score: {{playerData.playerScore}}</h5>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "player",
  props: ["playerData", "playerIndex"],
  data() {
    return {};
  },
  methods: {},
  components: {}
};
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
  color: #d1f7ff;
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
</style>