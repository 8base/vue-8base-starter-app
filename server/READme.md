# SERVER - 8base + VueJS Todos App

This directory is intended for any server side resources to be deployed to your 8base workspace. You'll need to have an 8base account and create a new workspace, as well as install the `8base-cli` to complete the following steps.

Please visit [the docs](https://docs.8base.com) for more information on getting started with 8base.

### Configure your workspace
8base provides an easy way of exporting and importing workspaces. We're going to use that now to jumpstart your Vue ToDos workspace.

1. Make sure your project is set to an appropriate workspace.
```sh
$ 8base config
=> Select workspace
```

2. Import the schema to the workspace. This can quickly be accomplished with the following command when inside the server directory.
```sh
$ 8base import -f data/todos-data.json
=> Importing schema...
```

3. Go to `Settings > Roles` in the 8base console and add a new role. Name it "Doer" and describe it as "Someone who does." 

4. Once the *Doer* role is created, click into it and update the *Read* and *Update* permissions for the *Boards* and *Todos* table to only permit "User's Records". This will enforce the proper scope for what resources a user has access to!

![Updating Roles](https://ibb.co/pZLgSxY)

5. Go to `Settings > Authentication` in 8base console and add a new authentication profile. Let's name it "Default Auth", select "8base Authentication", select "Open to All", and add the *Doer* role to roles. This configuration will allow open sign-up to our app, and make sure that any new user is assign the *Doer* role.

![Updating Roles](https://i.imgur.com/IgPO7mq.png)

6. Depending on what port you develop on, you may need to change the custom domains. Scroll down and update the custom domains to whitelist port 8080, as well as add a *Allowed Web Origin* of `http://localhost:8080`.

> Take note of the Client ID and Domain! You'll need to set them in the client app. You'll also need your workspace endpoint, which can be copied in `Settings`.

Now, this might sound bonkers... but you're whole back-end is set up! Feel welcome to tinker with it, maybe by adding more tables, complex roles, or some custom functions. Hopefully these resources will kick-start you in some fun direction:

* [8base Documentation](https://docs.8base.com)
* [YouTube Learning Academy](https://8base.com/c/8base)

