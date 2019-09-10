<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
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
  <div id="app">
    <!-- Simple nav -->
    <div id="nav">
      <!-- App title -->
      <h1>What's to do? Using Vue...</h1>
      
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/profile" 
        :class="{isDisabled: !authenticated}"
        :event="authenticated ? 'click' : ''">
        Profile
      </router-link> - 

      <!-- Display SignIn/SignOut btn dynamically -->
      <button @click="authBtn.fn">{{authBtn.txt}}</button>
    </div>

    <hr>

    <!-- Nav view -->
    <router-view />
  </div>
</template>

<script>
/* Import packages */
import { mapActions, mapGetters } from "vuex";

export default {
  name: "app",
  /**
   * Computed properties.
   */
  computed: {
    /**
     * Manage the state of the auth button
     * in the nav.
     */
    authBtn () {
      if (this.authenticated) {
        return {
          txt: 'Sign Out',
          fn: this.logout
        }
      }
      else {
        return {
          txt: 'Sign In',
          fn: this.login
        }        
      }
    },
    ...mapGetters(["authenticated"])
  },
  /**
   * Use state getters and actions to manage display
   * of baords are reflect mutations.
   */
  methods: mapActions(["login", "logout"])
}
</script>
