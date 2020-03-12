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
            class="bg-transparent info-border text-info input-font"
            placeholder="name..."
            v-model="room.playerName"
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
              v-model="room.rounds"
              class="form-control text-info bg-transparent info-border"
              placeholder="Choose"
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
            class="bg-transparent info-border text-info input-font"
            placeholder="name..."
            v-model="room.roomName"
          />
        </form>
      </div>
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
      room: {}
    };
  },
  methods: {}
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
select {
  width: 10rem;
}
</style>