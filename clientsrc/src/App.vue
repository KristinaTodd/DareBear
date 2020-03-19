<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "App",
    async beforeCreate() {
      this.$store.dispatch("initializeSocket");
      this.$store.commit("setMe", `${Math.floor(Math.random() * 100000000)}`)
    }
  };
</script>

<style lang="scss">
  @import "./assets/_variables.scss";
  @import "bootstrap";
</style>