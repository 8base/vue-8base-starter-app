import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloClient } from "apollo-client";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

/**
 * Import store to handle logout on expired token.
 */
import store from "@/store";

/**
 * A terminating link that fetches GraphQL results from 
 * a GraphQL endpoint over an http connection.
 *
 *   docs: https://www.apollographql.com/docs/link/links/http/
 *
 * The 8base workspace endpoint goes here.
 */
const httpLink = new HttpLink({
  uri: process.env.VUE_APP_WORKSPACE_ENDPOINT
});
/**
 * Common error handlers.
 */
/* NOTE DYLAN */
const errorHandlers = {
  /* Logout on expired token */
  TokenExpiredError: () => store.dispatch('logout'),
  /* Invalid token supplied */
  InvalidTokenError: ({ message }) => console.log(`[Token error]: Message: ${message}`),
  /* Default error handler */
  default: ({ message, locations, path }) => {
    console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
  }
};
/**
 * Error Link takes a function that is called in the event of an error. 
 * This function is called to do some custom logic when a GraphQL or 
 * network error happens.
 * 
 *   docs: https://www.apollographql.com/docs/link/links/error/
 */
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map((args) => (errorHandlers[args.code] || errorHandlers.default)(args));
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});
/**
 * Takes a function that returns either an object or a promise that 
 * returns an object to set the new context of a request.
 *
 *   docs: https://www.apollographql.com/docs/link/links/context/
 *  
 * Here we collect the authentication token from the auth module to 
 * add required bearer token to the headers.
 */
const authLink = setContext((_, { headers }) => ({
  headers: {
    authorization: `Bearer ${localStorage.getItem("id_token")}`,
    ...headers
  }
}));
/**
 * The ApolloClient class is the core API for Apollo, which we're using
 * to handle are GraphQL requests to the API.
 */
export default new ApolloClient({
  /* Concatenate the many links */
  link: errorLink.concat(authLink.concat(httpLink)),
  /* Initialize the cache for helping performance */
  cache: new InMemoryCache(),
  connectToDevTools: true
});
