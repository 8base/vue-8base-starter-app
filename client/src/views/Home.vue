<template>
  <!-- Authenticated home view -->
  <div v-if="authenticated" class="home">
    <!-- Show loader / boards canvas -->
    <div v-if="loading">Loading...</div>
    <BoardCanvas v-else :boards="$store.state.todo.boards" />
  </div>

  <h1 v-else>
    You need to login to see your boards!
  </h1>
</template>

<script>
/* Import packages */
import { mapActions, mapGetters } from "vuex";

/* Import local modules/files: (@ is an alias to src) */
import BoardCanvas from "@/components/BoardCanvas.vue";

export default {
  name: "home",

  components: {
    BoardCanvas
  },

  data() {
    return {
      loading: true
    };
  },
  /**
   * Use state getters and actions to manage display
   * of baords are reflect mutations.
   */
  computed: mapGetters(["authenticated"]),
  methods: mapActions(["fetchBoards"]),
  /**
   * If the user is authenticated, fetch the boards 
   * using the state action fetchBoards. This should
   * be run once the Vue compnent has mounted.
   */
  async mounted() {
    if (this.authenticated) {
      this.loading = true;

      await this.fetchBoards();

      this.loading = false;
    }
  }
};
</script>
