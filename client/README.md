# CLIENT - 8base + VueJS Todos App

This directory holds the client side application of this project. To use it, you'll first need to run through [setting up the 8base workspace](../server/README.md). Once that's done though... ALL you need to do is set some enironment variables!  

### Running the App
To run the ToDo's app, you're going to need to first install its dependencies. Make sure that your inside the `client` dir before running.

```sh
$ npm install
```
1. The [client/.env](./.env) file provides a template of the required environment variables. These variables are all collected from your workspace, and enable both authentication and api connectivity.

```sh
VUE_APP_WORKSPACE_ENDPOINT=<YOUR_WORKSPACE_ENDPOINT>
VUE_APP_AUTH_PROFILE_ID=<YOUR_AUTH_PROFILE_ID>
VUE_APP_AUTH_CLIENT_ID=<YOUR_AUTH_CLIENT_ID>
VUE_APP_AUTH_DOMAIN=<YOUR_AUTH_DOMAIN>
```

**NOTE**: Create a `.env.local` file to avoid commiting your environment variables!

2. Run the app... seriously, just run it now.

```sh
npm run serve
```

3. Visit [http://localhost:8080](http://localhost:8080) to test it out.

### TL;DR
There are several awesome things that have been done in this application to help you get started. Let's take a look at them:

1. **User Authentication**
The app enables sign-in and sign-up functionality using 8base auth (auth0 under the hood). Plus, it gives an example of enforcing authentication at the router level using guards.

The relevant files are:
* `client/src/utils/auth.js` - Configure, initialize, and export the 8base auth client.
* `client/src/store/modules/session.js` - Vuex manager for auth related state.
* `client/src/App.vue` - View providing sign-in / sign-out buttons.
* `client/src/router.js` - Example of auth checking router guard.

2. **GraphQL API**
The app utilizes an 8base workspace for accessing and updating it's data using the GraphQL API. The code for this is neatly wrapped into two modules that get used mainly within the Vuex modules. However, one example also exists in the "Profile" page of querying the API.

3. **Styles (or not...)**
This project is totally unstyles, minus a few minor css classes. If you'd like to add your own styling, go for it! However, we didn't want your first few steps being to rip out a chosen CSS framework to begin implimenting another.

The relevant files are:
* `client/src/utils/api.js` - Configure apollo client for error handling, auth, and the workspace endpoint
* `client/src/utils/graphql.js` - Build a library of GraphQL queries, mutations, and subscriptions.
* `client/src/store/modules/[todo|sessoin].js` - Executes queries against Api using module.
* `client/src/views/Profile.vue` - Runs query in component (outside state manager)

