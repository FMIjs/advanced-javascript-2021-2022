### TASKS:

1. Setup a new project using npm/yarn
2. Configure webpack using what we've learned in the [previous lecture](https://github.com/FMIjs/advanced-javascript-2021-2022/blob/master/week11/lecture/client/webpack.config.js)
3. Setup ts-loader in order for us to be able to use typescript
4. Install [LitElement](https://lit.dev/docs/getting-started/) 
5. Create these components using LitElement:
  * App - the root app component
  * UserList - a component that loads users from [the API](https://jsonplaceholder.typicode.com/users)
  * UserDetail - that is shown whenever someone clicks on a selected user

  (Show the User List and User Detail side by side. If no user has been selected don't show the detail, if a user is selected show the detail with the info for the user and if we click on the already selected user we deselect it and we hide the detail component)