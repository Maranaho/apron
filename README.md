# Naho's take home test - CRUD webapp

Thanks for reviewing my work.I made this [webapp](https://apron-naho.vercel.app/) in one day to apply at Apron for a Frontend role.

Use the branches to navigate my progress and get a sense of how I approached this test.
Here's a quick overview:

## Process
1. I started by organising an api to simulate a backend for managing users with functions that allow 2.	I structured an API to emulate a backend, providing functions for managing users, including fetching, adding, editing, and soft-deleting users.
3. Integrated these CRUD operations using custom hooks with React Query’s useMutation to handle user modifications and asynchronously update the user list.
4. Simulated a database by persisting the user data in localStorage.
5. Set up automated testing using Playwright to ensure functionality.
6. Enhanced the UI by adding components, buttons, and a table to display the user list.
7. Developed forms for adding and editing users.
8. Implemented form validation using React Hook Form and Yup.
9. Styled the form and UI components with CSS Modules, utilizing tokens for consistent design.
10. Added sorting functionality to the user list.
11. Wrote several end-to-end tests using Playwright to validate the app’s behavior.
12. Deployed to Vercel

## Improvements
This project was completed in a single (extended) day to showcase my skills.
While the core functionality is solid, with more time, I would have refined the user experience.

Currently, state changes are abrupt, I would have added smoother interactions, such as fading in the modal with a background dim and a slight upward motion. When a user is added, it would be visually appealing for the entry to grow into view rather than appearing instantly. Similarly, deletions could benefit from a more fluid transition.

Additionally, when editing, briefly highlighting the updated cell would provide clearer feedback for users.



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