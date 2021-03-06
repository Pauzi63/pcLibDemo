# Getting Started with Create React App

(evt. vorher npm aus Windows User Roaming-Folder löschen)
npm install -g typescript

# create-react-app

https://create-react-app.dev/docs/adding-typescript/
yarn create react-app krmdemo --template typescript

# Material-ui

https://material-ui.com/getting-started/installation/
yarn add @material-ui/core
yarn add @material-ui/icons

## folgende 2 Einträge in "public/index.html" hinzufügen

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

# react-query

https://react-query.tanstack.com
yarn add react-query

# react-router

https://create-react-app.dev/docs/adding-a-router
yarn add react-router-dom

# axios

https://github.com/axios/axios#installing
yarn add axios

# env

https://www.npmjs.com/package/env-cmd
yarn add env-cmd

# MSAL

yarn add msal
yarn add react-aad-msal

# Bearer Token KrmCore

yarn add jwt-decode

# Formik

https://formik.org/
yarn add formik

# Material-table

https://material-table.com/#/
yarn add material-table

# diverse libraries

yarn add react-localization

# tsconfig.json

"jsx": "react"

# Extensions

C# to TypeScript

# json-webserver

json-webserver https://github.com/typicode/json-server
Installation: npm install -g json-server
Start im Verzeichnis vom db.json: json-server --watch db.json --port 3099

# ---------------------------------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
