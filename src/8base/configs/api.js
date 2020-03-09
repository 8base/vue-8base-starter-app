import store from "@/store";

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