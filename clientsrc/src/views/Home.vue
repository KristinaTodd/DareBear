<template>
  <div class="bg-primary main-font">
    <Navbar />
    <div class="row m-2">
      <div class="col-1"></div>
      <div class="col-10 info-border text-center text-info">
        <h2>
          Welcome to
          <br />DareBear!
        </h2>
        <span>
          A party style game to play with your friends. Create or join a room with your friends and add a
          dare! Rate
          your friends on how well they complete each dare. Be careful, it's completely random so you could end up
          getting
          your own dare!
        </span>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row m-2 text-danger button-font mt-4">
      <div class="col-1"></div>
      <div class="col-10 d-flex justify-content-center button-border" @click="joinRoom">
        <div>Join A Room</div>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row m-2 text-danger button-font mt-4">
      <div class="col-1"></div>
      <div class="col-10 d-flex justify-content-center button-border" @click="createRoom">
        <div>Create A Room</div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
  import Navbar from "../components/navbar";
  export default {
    name: "Home",
    components: {
      Navbar
    },
    methods: {
      joinRoom() {
        this.$router.push({ name: "JoinRoom" });
      },
      createRoom() {
        this.$router.push({ name: "CreateRoom" });
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
</style>