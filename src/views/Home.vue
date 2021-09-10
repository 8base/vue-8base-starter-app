<template>
  <!-- Authenticated home view -->
  <div v-if="authenticated">
    <h1>You're Logged in!</h1>

    <code>{{ prettifyResp }}</code>
  </div>

  <h1 v-else>
    You need to login!
  </h1>
</template>

<script>
/* Import packages */
import { mapGetters } from "vuex";
import { api } from "@/8base";
import { RANDOM_QUERY } from "@/utils/graphql";

export default {
  name: "home",
  data() {
    return {
      data: {}
    };
  },
  /**
   * Use state getters and actions to manage display
   * of baords are reflect mutations.
   */
  computed: {
    prettifyResp() {
      return JSON.stringify(this.data, undefined, 2);
    },
    ...mapGetters(["authenticated"])
  },
  mounted() {
    if (this.authenticated) {
      api.query({
        query: RANDOM_QUERY
      }).then(resp => (this.data = resp.data));
    }
  }
};
</script>
