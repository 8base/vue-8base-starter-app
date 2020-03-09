const authProfileId = process.env.VUE_APP_AUTH_PROFILE_ID;
const clientId = process.env.VUE_APP_AUTH_CLIENT_ID;
const domain = process.env.VUE_APP_AUTH_DOMAIN;
/**
 * Find more information about the JS SDK's Auth config
 * at https://docs.8base.com/
 */
export default {
  strategy: "AUTH0_AUTH",
  settings: {
    domain,
    clientId,
    authProfileId,
    logoutRedirectUri: `${window.location.origin}/logout`,
    redirectUri: `${window.location.origin}/auth/callback`
  }
};