<template>
  <div class="about">
    <h1>This is a protected route.</h1>
    
    <div v-if="user">
      <p>ID: {{user.id}}</p>
      <p>EMAIL: {{user.email}}</p>
    </div>

    <span v-else>Loading...</span>
  </div>
</template>

<script>
import graphqlClient from "@/utils/api";
import { CURRENT_USER_QUERY as query } from "@/utils/graphql";

export default {
  data() {
    return {
      user: undefined
    }
  },

  mounted () {
    /**
     * Queryies the authenticated users information from 8base.
     */
    graphqlClient.query({ query })
    	.then(resp => this.user = resp.data.user);
  }
}
</script>