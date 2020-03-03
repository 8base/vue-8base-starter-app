import { auth, api } from "@/utils/eightBase";
import { CURRENT_USER_QUERY } from "@/utils/graphql";

/**
 * State maintains the authentication state using Vuex.
 * Determines "authenticated" status by presence of
 * "idToken" in local storage while storing the
 * idTokens value returned by the auth provider.
 */
const state = {
  authenticated: !!localStorage.getItem("id_token"),
  idToken: localStorage.getItem("id_token")
};
/**
 * State getters for retrieving state properties.
 */
const getters = {
  /**
   * Getter for retrieving authenticated status.
   */
  authenticated(state) {
    return state.authenticated;
  },
  /**
   * Getter for retrieving ID token.
   */
  idToken(state) {
    return state.idToken;
  }
};
/**
 * State mutations for setting state properties.
 */
const mutations = {
  /**
   * Updates the Vuex state's authentication data
   */
  authenticated(state, authData) {
    state.authenticated = true;
    state.idToken = authData.idToken;

    localStorage.setItem("id_token", state.idToken);
  },
  /**
   * Cleans Vuex state's authentication data
   */
  logout(state) {
    state.authenticated = false;
    state.idToken = false;

    localStorage.removeItem("id_token");
  }
};
/**
 * State actions for async and sync state related functions.
 */
const actions = {
  /**
   * launches Auth0 authentication
   */
  login() {
    auth.authorize();
  },
  /**
   * Logs out and updates Vuex state's authentication data
   */
  logout({ commit }) {
    commit("logout");

    auth.signOut();
  },
  /**
   * Checks if user is registered in 8base, if not signs up the user.
   * Afterwards stores the authentication data in Vuex State.
   *
   * This function utilizes methods available on the auth model that is
   * stored in utils/auth.js.
   */
  async handleAuthentication({ commit }) {
    const authResult = await auth.getAuthorizedData();
    const { idToken, idTokenPayload } = authResult;
    /**
     * Check if user exists in 8base.
     */
    const userResponse = await api.request(
      CURRENT_USER_QUERY,
      {},
      /**
       * Auth headers for communicating with the 8base API.
       */
      {
        headers: {
          Authorization: `Bearer ${idToken}`
        }
      }
    );
    /**
     * If user doesn't exist, an error will be
     * thrown, which then the new user can be
     * created using the authResult values.
     */
    if (userResponse.errors && userResponse.errors.length !== 0) {
      const { email } = idTokenPayload;

      await auth.signUpWithToken({ email }, idToken);
    }
    /* commit the auth data to state */
    commit("authenticated", authResult);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
