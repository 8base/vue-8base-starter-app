import eightBase from "8base-js-sdk";

import store from "@/store";

const workspaceId = process.env.VUE_APP_WORKSPCE_ID;
const authProfileId = process.env.VUE_APP_AUTH_PROFILE_ID;
const clientId = process.env.VUE_APP_AUTH_CLIENT_ID;
const domain = process.env.VUE_APP_AUTH_DOMAIN;

export const { api, auth } = eightBase.configure({
  workspaceId: workspaceId,
  Auth: {
    strategy: "AUTH0_AUTH",
    settings: {
      authProfileId,
      clientId,
      domain,
      redirectUri: `${window.location.origin}/auth/callback`,
      logoutRedirectUri: `${window.location.origin}/logout`
    }
  },
  Api: {
    headers: () => {
      const idToken = store.getters.idToken;

      if (idToken) {
        return {
          Authorization: `Bearer ${idToken}`
        };
      }

      return {};
    }
  }
});
