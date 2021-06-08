<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <Navbar />

    <hr />

    <router-view />
  </div>
</template>

<script>
/* Import packages */
import Navbar from "@/components/Navbar";

export default {
  name: "app",

  components: {
    Navbar
  }
};
</script>
