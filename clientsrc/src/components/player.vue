<template>
  <div class="col-12">
    <div class="row mt-2 ">
      <div class="col-1"></div>
      <!-- FIXME must fix dynamic picture loading using playerData.imgUrl  hard coded for styling purposes -->
      <div class="col-3"><img class="imgSize" :src="playerData.imgUrl" alt /></div>
      <div class="col-7 info-border">
        <h5 class="text-danger">
          {{playerData.playerName}}
        </h5>
      </div>
      <div class="col-1"></div>
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
    // computed: {
    //   players() {
    //     return this.$store.state.room.players;
    //   }
    // },
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