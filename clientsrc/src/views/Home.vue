<template>
  <div class="bg-primary main-font">
    <Navbar />
    <div class="row m-2">
      <div class="col-1"></div>
      <div class="col-10 info-border text-center text-danger">
        <h2>
          Welcome to
          <br />DareBear!
        </h2>
        <span>
          <strong>
            A party style game to play with your friends. Create or join a room with your friends and add a
            dare! Rate
            your friends on how well they complete each dare. Be careful, it's completely random so you could end up
            getting
            your own dare!
          </strong>
        </span>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row m-2 text-info button-font mt-4">
      <div class="col-1"></div>
      <div class="col-10 d-flex justify-content-center button-border">
        <div>Join A Room</div>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row m-2 text-info button-font mt-4">
      <div class="col-1"></div>
      <div class="col-10 d-flex justify-content-center button-border">
        <div>Create A Room</div>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row m-2 text-info button-font mt-4">
      <div class="col-1"></div>
      <div class="col-10 d-flex justify-content-center button-border">
        <div>Log In</div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "Home",
  components: {
    Navbar
  }
};
</script>

<style>
.info-border {
  border: 5px;
  border-style: solid;
  border-color: #05d9e8;
}

.button-border {
  border: 3px;
  border-style: solid;
  border-color: #ff2a6d;
}

.button-font {
  font-size: xx-large;
}

.main-font {
  font-family: "Gugi", cursive;
}
</style>
