<template>
  <nav class="navbar navbar-expand-md navbar-light text-black navbar-color">
    <router-link class="navbar-brand" :to="{ name: 'home' }">
      <div class="d-flex justify-content-between">
        <div>
          <img src="../assets/bearfinal.png" class="imgSize" />
        </div>
        <div class="ml-auto">
          <img src="../assets/DareBearLogo.png" class="logoSize" />
        </div>
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar-color {
  background: linear-gradient(0.25turn, #d1f7ff, #05d9e8, #01012b);
}
.imgSize {
  height: 3rem;
  width: 3rem;
}
.logoSize {
  width: 10rem;
}
</style>
