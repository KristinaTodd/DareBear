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
  }
};
</script>

<style lang="scss">
@import "./assets/_variables.scss";
@import "bootstrap";
</style>