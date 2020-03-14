<template>
  <div class="col-12">
    <div class="media">
      <!-- FIXME must fix dynamic picture loading using playerData.imgUrl  hard coded for styling purposes -->
      <img class="imgSize mr-3" src="~@/assets/userbear2.png" alt="Generic image" />
      <div class="media-body">
        <h5 class="text-info mt-3">
          {{playerData.playerName}} --
          Score: {{playerData.playerScore}}
        </h5>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "player",
  props: ["playerData"],
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
.imgSize {
  height: 3rem;
  width: 3rem;
}
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