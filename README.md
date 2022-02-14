# User Dashboard

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### Project Information
- typescript
- eslint, husky, lint-staged
- react-bootstrap
- react-toastify
- redux
- Axios

## Production site
Open 

## Available Scripts
### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run lint`

Runs the eslinter (rules: .eslintrc) and (ignore: .eslintignore)

### `npm run lint --fix`

Runs the eslinter with autofixing

### `npm run build:{env-name}`

Runs the react app build with specific file `env.[staging-state]`

----------

## Route list
- **/** => `pages/Home.tsx` (Beranda)
- **/users** => `pages/UserPage.tsx` (list of User)

## Project folder structure
### `components`
contains list of reusable components pagination, searchWrapper, dataTable
### `constants`
contain many variables that being used as a constant data
### `redux`
contain a reducer, a action and store config for state management
### `services`
contains index.ts (Generic Function for API Call) and others redux-thunk actions
### `styles`
contains list of scss modules for each component
### `type`
contains general type/interface/enum and also redux typing in each page
### `utils`
contains a small util function to do a low level abstractions of function
______
### Important Notes
- App.scss => `for all the whole styles`
- this app using lazy load (routes)
