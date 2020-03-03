<template>
  <div class="authenticating">
    Authenticating...
  </div>
</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";

export default {
  name: "Callback",

  methods: mapActions(["handleAuthentication"]),

  async mounted() {
    await this.handleAuthentication();

    router.push({ name: "home" });
  }
};
</script>
