import eightBase from "8base-js-sdk";

import ApiConfig from "./configs/api";
import AuthConfig from "./configs/auth";

export const { api, auth } = eightBase.configure({
  workspaceId: process.env.VUE_APP_WORKSPACE_ID,
  Auth: AuthConfig,
  Api: ApiConfig
});
