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

Even if you have an idea of what your app is going to look like in the end, you start with single blocks. Each block on its own is functional and can help you do build something. You can even build bigger blocks out of smaller ones and join them together.

That’s actually how Component-Based-Architecture works. So think about our todo app again. And think about it in terms of building blocks that you need to have all the functions of the app working. How would you split the app then?

- App Component
- Avatar Component
- Date Component
- Task List Component
- Task Component
- Add Button Component

**src/App.css:** Delete Everything
**src/App.js:** Edit it so it doesn’t import logo.svg and only returns Hello World. It should look like this:

**src/index.css:** Delete everything

**public/index.html:** Change title to TodoReact
Now reloading our project in the browser should give us a simple “Hello World” message.

## Creating The Task Component
Lets add a new file called **Task.js** to our src folder. As a reminder, this is what the task component would look like:

Looking at how this task component should look, it seems it could use a little help from a grid layout. Thankfully, Bootstrap can be easily integrated into our project. From the terminal / command prompt, run:
`npm install react-bootstrap --save && npm install bootstrap@3 --save`
We will also use font awesome for the check & remove icons so let’s install that too:
`npm install react-fontawesome --save && npm install font-awesome --save`
After installing these, we need to import our css files in our **index.js** file.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

Now let’s create the basic structure of our **Task** component

```javascript
import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Task extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={1}>
                        <div>
                            <p style={{textAlign: 'center', fontWeight: 'bold', paddingTop: '10px'}}>8
                                <br/>
                                <span>AM</span>
                            </p>
                        </div>
                    </Col>
                    <Col xs={10}>
                        <h4 id="activity-title">Storefoundry Branding</h4>
                        <p>Ideation/Sketch/Wireframing</p>
                    </Col>
                    <Col xs={1}>
                        <Row style={{paddingTop: '10px'}}>
                          <Col xs={6}>
                            <FontAwesome name='times' />
                          </Col>
                          <Col xs={6}>
                            <FontAwesome name='check' />
                          </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Task;
```

Now that we have created our task component, we can use it just like any other component.
```javascript
import React, { Component } from 'react';
import Task from './Task.js';

import './App.css';

class App extends Component {
  render() {
    return (
          <Task />
    );
  }
}

export default App;
```

No Styling yet … I know I know 😉. Let’s focus on building blocks before worrying about styling.
So now that have built a task component and can render it, can we build a task list component that will render 5 task components? But of course!
Let’s create a **TaskList** component by adding a file called **TaskList.js** to our src folder.
```javascript

import React, { Component } from 'react';
import Task from './Task.js';

class TaskList extends Component {
  render() {
    return (
      <div>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
      </div>
    );
  }
}

export default TaskList;
```

In this case, we simply imported our **Task** component and rendered 5 tasks to have our task list component.
After this, let’s modify **App.js** to render our task list component.

```javascript
import React, { Component } from 'react';
import TaskList from './TaskList.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <TaskList />
      </div>

    );
  }
}

export default App;
```

How about a **Date** Component that will sit on top of our **Task List** component? Let’s do it!
Let’s create a **Date.js** file in our src folder.
```javascript
import React, {Component} from 'react';

class Date extends Component {
    render() {
        return (
            <div>
                <h1>Thursday</h1>
                <p>May 19, 2016</p>
            </div>
        );
    }
}

export default Date;
```

Now let’s add our **Date** Component to our **App.js** file so it sits on top of the tasks list.
```javascript
import React, { Component } from 'react';
import TaskList from './TaskList.js';
import Date from './Date.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{padding: '30px 30px'}}>
          <Date />
          <br />
          <TaskList />
      </div>
    );
  }
}

export default App;
```

We will repeat the same process to add an avatar component and an add button component.
### Avatar.js
```

import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class Avatar extends Component {
    render() {
        return (
            <div>
              <Row>
                <Col xs={10}></Col>
                <Col xs={2}>
                  <Image src="https://cdn-images-1.medium.com/fit/c/200/200/1*qSozwB2ZQYFRd07N7rLzGw.jpeg" thumbnail circle />
                </Col>
              </Row>
            </div>
        );
    }
}

export default Avatar;
```

I chose to use the Image component from React bootstrap here but using the default img works just fine.
### AddButton.js
```javascript
import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class AddButton extends Component {
    render() {
        return (
            <div>
              <Row>
                <Col xs={10}></Col>
                <Col xs={2}>
                  <Button bsStyle="danger" bsSize="large">
                    <FontAwesome name='plus' />
                  </Button>
                </Col>
              </Row>
            </div>
        );
    }
}

export default AddButton;
```

Final version of our **App.js** would then look like this:
```javascript
import React, { Component } from 'react';
import TaskList from './TaskList.js';
import Date from './Date.js';
import Avatar from './Avatar.js';
import AddButton from './AddButton.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{padding: '30px 30px'}}>
          <Avatar />
          <br />
          <Date />
          <br />
          <TaskList />
          <br />
          <AddButton />
      </div>
    );
  }
}

export default App;
```
