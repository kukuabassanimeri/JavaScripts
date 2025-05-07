//* React - front-end JavaScript library
//* set up react environment - npx create-react-app appName
//* cd appName
//* npm start - start the development and run the React application

//* React support tools
//* Babel - transpile the JavaScript code
//* Webpack - merge the output JavaScript files into a single file called bundle.js

//* react files/directories
//* src/index.js - first file that executes when the React app starts
//* public/index.html - skeleton for the React app
//* package.json - Provide a list of dependencies the React app needs
//* node-modules - store the dependencies of the React app

import React from 'react'; //* allows you to define components and how they work together
import ReactDOM from 'react-dom/client'; //* knows how to display a component in the web browser.

const myFirstElement = <h1>Hello my React!</h1>
const root = ReactDOM.createRoot(document.getElementById('root')); //* root from index.html

root.render(myFirstElement); //* show react component on the screen

//* { } - used to render js expressions
//* comments in react - {/* */}