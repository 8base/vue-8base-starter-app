# 🎱 8base + VueJS Starter App 🏎️

This project is a starter app for getting started with VueJS + 8base! The app is pre-configured to use 8base user authentication and the GraphQL API by way of the `8base-js-sdk`, so you can immediately hop into building something awesome. 

You'll need to create an [8base workspace](https://app.8base.com) and [Authentication Profile](https://docs.8base.com/8base-console/authentication#8base-authentication). Once that's done... ALL you need to do is set some enironment variables!  

### Running the App
To run the app, you're going to need to first install its dependencies.

```sh
$ npm install
```
1. The [.env](./.env) file provides a template of the required environment variables. These variables are all collected from your workspace, and enable both authentication and api connectivity.

```sh
PORT=3000
VUE_APP_WORKSPACE_ENDPOINT=<YOUR_WORKSPACE_ENDPOINT>
VUE_APP_AUTH_PROFILE_ID=<YOUR_AUTH_PROFILE_ID>
VUE_APP_AUTH_CLIENT_ID=<YOUR_AUTH_CLIENT_ID>
VUE_APP_WORKSPACE_ID=<YOUR_WORKSPACE_ID>
VUE_APP_AUTH_DOMAIN=<YOUR_AUTH_DOMAIN>
```

**NOTE**: Create a `.env.local` file to avoid commiting your environment variables!

2. Run the app... seriously, just run it now.

```sh
npm run serve
```

3. Visit [http://localhost:3000](http://localhost:3000) to test it out.

### TL;DR
There are several awesome things that have been done in this application to help you get started. Note that the `8base-js-sdk` gets initalized in the `source/8base/index.js` file. Let's take a look at them:

1. **User Authentication**
The app enables sign-in and sign-up functionality using 8base auth (auth0 under the hood). Plus, it gives an example of enforcing authentication at the router level using guards.

The relevant files are:
* `src/router.js` - Example of auth checking router guard.
* `src/App.vue` - View providing sign-in / sign-out buttons.
* `src/8base/configs/auth.js` - Config for 8base auth client.
* `src/store/modules/session.js` - Vuex manager for auth related state.

2. **GraphQL API**
The app utilizes an 8base workspace for accessing and updating it's data using the GraphQL API. The code for this is neatly wrapped into two modules that get used mainly within the Vuex modules. However, one example also exists in the "Profile" page of querying the API.

The relevant files are:
* `src/8base/configs/api.js` - Configure Api client.
* `src/views/Profile.vue` - Runs query in component (outside state manager)
* `src/store/modules/session.js` - Executes queries against Api using module.
* `src/utils/graphql.js` - Build a library of GraphQL queries, mutations, and subscriptions.

3. **Styles (or not...)**
This project is totally unstyled, minus a few minor css classes. If you'd like to add your own styling, go for it! However, we didn't want your first few steps being to rip out a chosen CSS framework to begin implimenting another.

### Contributing
Feel welcome to fork this project and change it as you need, or submit a pull request with comments and improvements!
