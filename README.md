# Eventio App is Test assignment app

App Eventio, a little web app that allows registered users to create events.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Project structure

├── src
│   ├── API         # API resources, GET/POST/, auth tokens
│   ├── Components  # App Components
│   └── Config      # files-helpers, data configuration, constants, etc.
|		└── Context			# Context
│   ├── Images      # All images for project
│   ├── Styles      # Base styles, fonts for entire app
│   ├── App.js      # Main app logic, Routing
├── public 					# static files, assets
└── ...

## What else needs to be done

Login page:
- show/hide password
- fix the image display
// Components/LoginForm

Sign Up:
- entire page and functional

Page Down:
- add page 'something went wrong'

Dashboard:
- finish setting up the styles for event card data // Components/EventCard
- finish setting up the styles for event cards in grid and line views
- add functionality to display user name and initials // Components/Header
- fix/finish error display

Create new event:
- fix/finish error display // Components/NewEventForm

Event detail:
- entire page and functional

Edit Event:
- entire page and functional

Profile:
- entire page and functional

Global fixes:
- check the buttons, it may be worth making an extra LinkButton configuration
- redesign the constants for the buttons, put them in a separate file
- add some tests
- add toggle for dark side theme

