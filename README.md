# Apron take home CRUD webapp
##### Naho N'Guessan

Thanks for reviewing my work.
I made this [webapp](https://apron-naho.vercel.app/) to apply at Apron for a Frontend role.
You can use the branches to navigate my progress and get a sense of how I approached this test.
Here's a quick overview:

1. I started by organising an api to simulate a backend for managing users with functions that allow fetching, adding, editing, and soft-deleting users.
2. I implemented these CRUD operations with custom hooks that use React Query’s useMutation to add, edit, delete a user and update the user list asynchronously.
3. I persisted the data in localStorage, again to simulate a db.
4. Implemented testing with Playwright.
5. I then built up the ui a bit more, adding components and building the buttons and table.
6. I created the form to add and edit users.
7. I styled the form, all CSS is done with CSS Modules and I also set up tokens.
8. I implemented the sorting feature.
9. I wrote a few e2e tests with playwright.



## Stack
- [Vite](https://vite.dev/guide/)
- React
- TypeScript
- .Sass for styling
- [React Hook Form ](https://www.react-hook-form.com/) and [Yup](https://github.com/jquense/yup/tree/pre-v1) for form validation
- [ReactQuery](https://tanstack.com/query/latest/docs/framework/react/overview) for data fetching and caching
- [Playwright](https://playwright.dev/) for e2e testing
- Deployed with [Vercel](https://vercel.com/)


## Installation

This app requires [Node.js](https://nodejs.org/) v18 or higher to run.

Install the dependencies and devDependencies and start the server.

```sh
yarn
yarn dev
```