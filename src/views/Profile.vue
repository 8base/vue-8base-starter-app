<template>
  <div class="about">
    <h1>This is a protected route.</h1>

    <div v-if="user">
      <p>ID: {{ user.id }}</p>
      <p>EMAIL: {{ user.email }}</p>
    </div>

    <span v-else>Loading...</span>
  </div>
</template>

<script>
import { api } from "@/8base";
import { CURRENT_USER_QUERY } from "@/utils/graphql";

export default {
  data() {
    return {
      user: undefined
    };
  },
  mounted() {
    /**
     * Queryies the authenticated users information from 8base.
     */
    api.query({
      query: CURRENT_USER_QUERY
    }).then(resp => {
      this.user = resp.data.user  
    });
  }
};
</script>
