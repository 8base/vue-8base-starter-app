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
import { CURRENT_USER_QUERY } from "@/utils/graphql";	

export default {
	data() {
		return {
			user: undefined
		}
	},

	methods: {
		async fetchUser() {
			/**
			 * Queryies the authenticated users information from 8base.
			 */
		  const response = await graphqlClient.query({
		    query: CURRENT_USER_QUERY,
		    fetchPolicy: "network-only"
		  });

		  this.user = response.data.user
		}
	},

	mounted() {
		this.fetchUser()
	}
}
</script>
