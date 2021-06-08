import eightBase from "8base-js-sdk";
/**
 * Config imports
 */
import ApiConfig from "./configs/api";
import AuthConfig from "./configs/auth";

export const { api, auth } = eightBase.configure({
  /**
   * Workspace ID is required!
   */
  workspaceId: process.env.VUE_APP_WORKSPACE_ID,
  /**
   * Specify configs for any named SDK module 
   */
  Auth: AuthConfig,
  Api: ApiConfig
});
