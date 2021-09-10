import { Auth, AUTH_STRATEGIES } from '8base-sdk';

import store from "@/store";

/**
 * There are multiple auth strategies that can be
 * used when using 8base. By default, specifying
 * 'web_8base_cognito' will configure the 8base auth client.
 */
export const auth = Auth.createClient(
  {
    strategy: AUTH_STRATEGIES.WEB_8BASE_COGNITO,
    subscribable: true,
  },
  {
    domain: process.env.VUE_APP_AUTH_DOMAIN,
    clientId: process.env.VUE_APP_AUTH_CLIENT_ID,
    logoutRedirectUri: `${window.location.origin}/logout`,
    redirectUri: `${window.location.origin}/auth/callback`,
  }
);