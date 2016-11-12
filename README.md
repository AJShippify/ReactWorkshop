# Creating our React App
Let’s create a react app by running the following command from the terminal / command prompt:
```bash
create-react-app todoreact
```
This will create a react app in a folder called “**todoreact**”.
Instead of naming your project “**todoreact**” you can call it whatever you want. Just know that a project folder will be created for whatever name you choose when creating your React App. When the project setup is done, you will receive a message in the terminal that looks like this:

```
Success! Created todoreact at /Users/Alvaro/Documents/Projects/todoreact
Inside that directory, you can run several commands:
npm start
    Starts the development server.
npm run build
    Bundles the app into static files for production.
npm test
    Starts the test runner.
npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!
We suggest that you begin by typing:
cd todoreact
  npm start
  
```
Now the real fun begins. Let’s have a look at our project folder and try to understand what it looks like, why it’s organized the way it is and the purpose of each file in the project.
Let’s go into our project directory now and see what we are dealing with:

```
todoreact/
  README.md
  node_modules/
  package.json
  .gitignore
  public/
    favicon.ico
    index.html
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

**README.md:** For providing some information about the project you are working on and if applicable, include setup & installation documentation.


**node_modules:** What happens is Create-React-App took care of adding all the necessary javascript libraries we needed and when those libraries get downloaded, they are stored in this node_modules folder.


**package.json:** I like to think of this file as a blueprint of the project. Let’s look at it’s content.
```json
{
  "name": "todoreact",
  "version": "0.1.0",
  "private": true,
  "devDependencies": {
    "react-scripts": "0.6.1"
  },
  "dependencies": {
    "react": "^15.3.2",
    "react-dom": "^15.3.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```
**.gitignore:** This is used by git to identify what needs to ignored when version controlling your work.
**public:** index.html and favicon.ico! So this index.html file is the page that will actually render everything we do. If you wanted to add some meta tags, web fonts, analytics scripts, etc … this is where you would do them too.
**src:** Now to the fun part! This is where we will be spending most of our time. Let’s do this:
- **App.css:** Styling of our app goes here. It’s standard CSS so nothing new here.
- **App.js:** React uses a component-based-architecture (C.B.A.), so every element on your User Interface can be thought of as a component. That means the main container of your app is the main component. Which has children components which have children components and so on. So this App.js is the component class for our “App” component.
- **App.test.js:** We won’t go into testing for now, but just know that C.R.A. supports testing and for every component we create.
- **index.js:** This is the entry point into our src folder. So this is the file where we import all our components, classes, stylesheets and render our “App” component.
- **logo.svg:** Since we aren’t writing HTML directly here, if we need to add any type of assets (images, videos, fonts, etc …) in our src folder. You can always create other folders to separate your assets, what’s important is knowing that your assets can be imported into your components.

# Running Our App
We are almost done! Now we know what our project structure looks like. Let’s run it and see what happens.
From your terminal / command prompt (which you should still have open), type the following command:
```bash
npm start
```
Now, go to http://localhost:3000 in your browser.
