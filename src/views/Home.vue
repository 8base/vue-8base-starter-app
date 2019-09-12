<template>
  <!-- Authenticated home view -->
  <h1 v-if="authenticated">
    You're Logged in!
  </h1>

  <h1 v-else>
    You need to login!
  </h1>
</template>

<script>
/* Import packages */
import { mapActions, mapGetters } from "vuex";

export default {
  name: "home",
  /**
   * Use state getters and actions to manage display
   * of baords are reflect mutations.
   */
  computed: mapGetters(["authenticated"])
};
</script>
