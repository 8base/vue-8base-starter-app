<style>
#nav {
  padding: 0 0 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav a.isDisabled {
  color: #ddd;
}
</style>

<template>
  <div id="nav">
    <!-- App title -->
    <h1>VueJS ❤️ 8base</h1>

    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link
      to="/profile"
      :class="profileBtn.class"
      :event="profileBtn.event"
    >
      Profile
    </router-link>
    -

    <!-- Display SignIn/SignOut btn dynamically -->
    <button @click="authBtn.fn">{{ authBtn.txt }}</button>
  </div>
</template>

<script>
/* Import packages */
import { mapActions, mapGetters } from "vuex";

export default {
  name: "navbar",
  /**
   * Computed properties.
   */
  computed: {
    /**
     * Manage the state of the auth button
     * in the nav.
     */
    authBtn() {
      return this.authenticated
        ? {
            txt: "Sign Out",
            fn: this.logout
          }
        : {
            txt: "Sign In",
            fn: this.login
          };
    },
    /**
     * Manage the state of the profile button
     * in the nav.
     */

    profileBtn() {
      return this.authenticated
        ? {
            class: "",
            event: "click"
          }
        : {
            class: "isDisabled",
            event: ""
          };
    },

    ...mapGetters(["authenticated"])
  },
  /**
   * Use state getters and actions to manage display
   * of baords are reflect mutations.
   */
  methods: mapActions(["login", "logout"])
};
</script>
