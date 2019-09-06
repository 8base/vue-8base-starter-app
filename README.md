# 8base + VueJS Todos App

Hey there! Thanks for checking out this project. It's intended to be an epic starting point when building VueJS + 8base apps. Really quickly, lets break down what that means.

#### VueJS
[Vue](https://vuejs.org/v2/guide/) is a progressive framework for building killer user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

#### 8base
[8base](https://docs.8base.com/) is a GraphQL API and serverless backend that lets developers quickly build world-class applications. It's fully extensible using Javascript, and handles things like database setup (initialization, migrations, management), roles and permissions, user authentication, and serverless deployment like a pro! The core feature set of 8base allows any developer to set-up fully scalable back-end infrastructure for their applications.

### Steps taken to create

##### Client
The client app was initialized using the `vue-cli v3.1.0`. All files in the project are extensively documented with file comments. We encourage you to look through the code, starting at [client/src/main.js](././client/src/main.js).

**Vue Configurations**
* Manually select fatures
* Babel, PWA, Router, Vuex, and Linter
* History mode
* ESLint + Prettier
* Lint on save
* In dedicated config files

To install dependencies, set required variables, and run the app, view the [client READme](./client/README.md)

##### Server
The server resources are contained in an 8base workspace, providing a GraphQL API that's automatically generated in accordance with the projects data model. 8base is also handling / providing authentication, authorization, and the database. 

To set up an 8base workspace that works in tandem with the Vue ToDo app, view the [server READme](./server/README.md)

### Learning Resources
To learn more about developing with 8base and Vue, here are some awesome resources!

**8base**
* [8base Documentation](https://docs.8base.com)
* [YouTube Learning Academy](https://8base.com/c/8base)

**Vue**
* [Vue Documentation](https://vuejs.org/v2/guide/)
* [Vue Learning Videos](https://www.youtube.com/results?search_query=vue+js)
