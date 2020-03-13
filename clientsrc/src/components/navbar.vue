<template>
  <nav class="navbar navbar-expand-md navbar-light text-black navbar-color">
    <div class="row">
      <div class="col-2">
        <router-link class="navbar-brand" :to="{ name: 'Home' }">
          <img src="../assets/bearfinal3.png" class="imgSize" />
        </router-link>
      </div>
      <div class="col-1"></div>
      <div class="col-4">
        <router-link class="navbar-brand" :to="{ name: 'Home' }">
          <img src="../assets/DareBearLogo.png" class="logoSize" />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar-color {
  background: (#01012b);
}

.imgSize {
  height: 3rem;
  width: 3rem;
}

.logoSize {
  height: 3rem;
  width: auto;
}
</style>