import store from "@/store";
/**
 * Find more information about the JS SDK's Api config
 * at https://docs.8base.com/
 */
export default {
  headers: () => {
    const idToken = store.getters.idToken;

    if (idToken) {
      return {
        Authorization: `Bearer ${idToken}`
      };
    }

    return {};
  }
};