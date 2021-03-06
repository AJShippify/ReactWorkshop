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
```javascript
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

But our list of tasks is static. Our date is also static. And we can’t actually add new tasks to this list yet. Yuck!

Let’s start with an easy one. Our Date component is supposed to simply display the current date.
Currently, our date component looks like this:
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

So what we need todo is make that the date be dynamic and display the current date. Luckily, there’s a great library for working with dates in javascript: MomentJS. So let’s use that to display our date. First of all, let’s install it with the following command:
```bash
npm install moment --save
```
After installing the moment library, we can import it and use it like this:
```javascript
import React, {Component} from 'react';
import Moment from 'moment';

class Date extends Component {
    render() {
        return (
            <div>
                <h1>{Moment().format('dddd')}</h1>
                <p>{Moment().format('LL')}</p>
            </div>
        );
    }
}

export default Date;
```
Hehe, looks like magic but it’s not really difficult. First off, there’s the use of the single curly braces around our html tags. This is necessary so we can tell our transpiler that the code in the braces is javascript code that needs to be executed and evaluated.

By following the momentjs documentation, using the format function with a format string gives us exactly what we need. By default Moment() returns the date & time as of when it’s executed. So applying the ‘dddd’ format gives us the full day (e.g. Monday, Tuesday …) instead of a number (e.g. Monday = 1). And the ‘LL’ format gives us the date as “Month Name, Day of Month, Year”.

Perfect! Now let’s do something more interesting. Our TaskList component right now displays a static list of 5 components. They all display the same thing. What we will do first is tweak up our task component so that we can pass some data to it and make it dynamic. Currently, our task component looks like this:
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

The parts of the components I would like to make dynamic are the time section, the activity title and the activity description. But wait, if I’m making them dynamic, how am I going to pass data to it? Where is that data going to come from? 🤔

Follow along, and say hello to **Props** #LetsDoThis 😄

What are Props? Props are to react components what parameters are to functions. If you think about components like functions, then the way you define which parameters you pass to your functions is exactly how you would define your props as arbitrary inputs to be used in your react components. Applying that to our task component would give us something like this:
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
                            <p style={{textAlign: 'center', fontWeight: 'bold', paddingTop: '10px'}}>{this.props.time}
                                <br/>
                                <span>{this.props.period}</span>
                            </p>
                        </div>
                    </Col>
                    <Col xs={10}>
                        <h4>{this.props.activity_title}</h4>
                        <p>{this.props.activity_description}</p>
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

We didn’t change much, all we did was replace a bunch of static texts with this.props expressions. At this stage, if we take a look at our app, it’s going to look weird …

Where did all the text go???? 😱😱😱

Don’t panic just yet 😉 … Think about it. We now have a component with props defined. If the tasks are being displayed this way, it’s because the tasks components don’t know what the values of props.time, props.period, props.activity_title and props.activity_description are. So we need to edit our task list component to make sure that we are giving our tasks their props values for it to work as expected. Let’s do that real quick.
```javascript
import React, { Component } from 'react';
import Task from './Task.js';

class TaskList extends Component {
  render() {
    return (
      <div>
          <Task time="12" period="AM" activity_title="Finish Tutorial Series" activity_description="#ReactForNewbies" />
          <Task time="9" period="AM" activity_title="Meeting with Team Leads" activity_description="New Project Kickoff" />
          <Task time="11" period="AM" activity_title="Call Mom" activity_description="Return her call before she kills me" />
          <Task time="3" period="PM" activity_title="Fix Wifey's website" activity_description="FB Ads Integration not working" />
          <Task time="6" period="PM" activity_title="Do DB Backups" activity_description="Related to upcoming server migration" />
      </div>
    );
  }
}

export default TaskList;
```

Look at that! Now we have dynamic tasks and our task list is displaying tasks based on which props we passed to each of them.
This is good … but it could be better. What if I could store all my tasks in an array so I can just loop through them to display my task list? Let’s tweak our task list component a bit.
```javascript
import React, {Component} from 'react';
import Task from './Task.js';

class TaskList extends Component {
    render() {
        var tasks = [
            {
                'time': '12',
                'period': 'AM',
                'activity_title': 'Finish Tutorial Series',
                'activity_description': '#ReactForNewbies'
            }, {
                'time': '9',
                'period': 'AM',
                'activity_title': 'Meeting with Team Leads',
                'activity_description': 'New Project Kickoff'
            }, {
                'time': '11',
                'period': 'AM',
                'activity_title': 'Call Mom',
                'activity_description': 'Return her call before she kills me'
            }, {
                'time': '3',
                'period': 'PM',
                'activity_title': 'Fix Wifey\'s website',
                'activity_description': 'FB Ads Integration not working'
            }, {
                'time': '6',
                'period': 'PM',
                'activity_title': 'Do DB Backups',
                'activity_description': 'Related to upcoming server migration'
            }
        ];

        return (
            <div>
                {tasks.map(function(task, index) {
                    return <Task
                                key={index}
                                time={task.time}
                                period={task.period}
                                activity_title={task.activity_title}
                                activity_description={task.activity_description}/>
                })}
            </div>
        );
    }
}

export default TaskList;
```

Our app still looks the same but under the hood, we have a more flexible way to manipulate our data. Try changing anything, adding a new task, editing existing tasks or removing a task and see what happens on the app. 😃
That wasn’t too hard right? Let’s recap on what we did.

- We introduced a new 3rd party library called MomentJS to work with dates. Even though we didn’t do much with it in this chapter, we will work with it a little more in the upcoming chapter.
- We learned about props and applied them to make our task component dynamic.
- We tweaked our tasklist component so we can pass data to it directly from an array of tasks.
- We played around with our array of tasks to see our app automatically update itself with the state of our tasks array.

Let’s pause for a second and think about this array of tasks again. Based on what we’ve seen, that means when adding a task, all we have to do is insert our task into the array of tasks and deleting a task just means removing that task from the array of tasks right? And we don’t have to worry about what happens on the UI side of things because it will automatically detect our changes and REACT to them … 😍😍😍

When running our app, changing any of the values in the tasks array cause our user interface to react instantly to the changes.

That means, adding a task will be done by simply updating our array of tasks with whatever the user enters at the UI level right?

But looking at where we defined our array of task, is that really where it should reside? Since tasks is defined in the **render** function of **TaskList**, it can’t be accessed from another component. So how do we solve this?

An obvious answer will be that our tasks need to be stored as a global variable so we can access it from anywhere. So how do global variables work in React? 🤔

Follow along, and say hello to **State**

I’ve been trying to find a good definition of state, but I can’t really formulate one so let me explain with 2 examples.

Imagine you had a car. When your car is parked, how do you know it’s actually parked safe for you to get down without hurting yourself?

- Speed is at 0mph
- Gear is in Parking mode
- Handbrake is on
- Engine is Off

These 4 things guarantee that the car is parked right? And when you are about to start driving, these parameters will have to change for you to be able to move. So the state of your car when it’s parked is not the same as when it’s moving. And when your car gets into specific states, some actions are triggered. For example, pressing the accelarator changes the speed state and it increases. Pressing the brake pad also changes the speed state and it decreases. It’s interesting to note that even though the whole car has multiple properties that defines it’s state, the accelerator and brake pad only interact with one of them. The state of a car can be defined by a set of properties that all start with a default value (parked state) and change depending on some triggers.

Let’s take another example. Imagine you had 3 bowls. one contains regular water, the second one ice and the third one boiling water.

What do these 3 bowls have in common? It’s all water!

But why are they different? Because they don’t have the same temperature!

So if water is our component, the state being the temperature, which also starts with a default value changes the nature of our component when increased (into ice) or decreased (into boiling water).

So thinking about our todo app now, what can we represent as it’s state?

- Is it passed in from a parents via props? If so, it probably isn’t a state.
- Does it remain unchanged over time? If so, it probably isn’t a state.
- Can you compute it based on any other state or props in your component? If so, it isn’t a state

By analysing all our components, we can conclude that indeed, our array of tasks is a good candidate to be a state. It’s not passed in from any parents, it doesn’t remain constant because we can add or remove items from the list and we cannot compute it based on any other state.

From our examples earlier, we spoke about states having a default value when defined. That means we must figure out a way to define the initial state of tasks, which at this point will return the initial list of tasks that we are currently displaying. Ideally, this initial list of tasks should come from an api but we will keep it simple for now and do this in a later chapter.

If you remember from our hierarchical view, the App component is at the highest level so it can be considered as a good entry point to initialize our state.

So what we are going to do is initialize our state with it’s default values in the constructor of the App component class.
This is what our App.js would look like with a default state in place.
```javascript
import React, { Component } from 'react';
import TaskList from './TaskList.js';
import Date from './Date.js';
import Avatar from './Avatar.js';
import AddButton from './AddButton.js';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: [
          {
              'time': '12',
              'period': 'AM',
              'activity_title': 'Finish Tutorial Series',
              'activity_description': '#ReactForNewbies'
          }, {
              'time': '9',
              'period': 'AM',
              'activity_title': 'Meeting with Team Leads',
              'activity_description': 'New Project Kickoff'
          }, {
              'time': '11',
              'period': 'AM',
              'activity_title': 'Call Mom',
              'activity_description': 'Return her call before she kills me'
          }, {
              'time': '3',
              'period': 'PM',
              'activity_title': 'Fix Wifey\'s website',
              'activity_description': 'FB Ads Integration not working'
          }, {
              'time': '6',
              'period': 'PM',
              'activity_title': 'Do DB Backups',
              'activity_description': 'Related to upcoming server migration'
          }
      ]
    }
  }
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

Let’s break this down first shall we?

**constructor():** This works the same way constructors work in any object oriented programming. Remember that every react component is a class primarily so this is how we override the constructor method to have it do some stuff whenever the class is instantiated.
**super():** If you come from a Java background, this would be familiar to you, it works the same way. The super() method is required to be called inside the constructor method before you can do anything else. It is used to invoke the constructor of the component it is inheriting from. Interestingly, I tried to create a constructor without it and got this error:

**this.state = {…}:** This is where we define our initial state now. Interesting thing to note is that the state is an object. This is really neat because assuming we had more than just a list of tasks to initialize, we could simply add another property to the state object. Also back to why the **super()** method is important, it’s because before it’s called, this is uninitialized, so we can’t access state or anything else.

Now that we’ve moved tasks into **this.state** we can remove our array of tasks from the **TaskList** component.

Hold Up! This doesn’t look right, and as expected, we get an error message.

Okay, looks like we forgot to do something … Let’s walk back a bit. We’ve moved our tasks to the **this.state** in **App.js**. How will **TaskList** know about these tasks now? We can simply pass **this.state.tasks** as props to **TaskList**.
So first things first, we’ll solve the ‘tasks’ is not defined issue by using **this.props.tasks**.
```javascript
import React, {Component} from 'react';
import Task from './Task.js';

class TaskList extends Component {
    render() {
        return (
            <div>
                {this.props.tasks.map(function(task, index) {
                    return <Task
                                key={index}
                                time={task.time}
                                period={task.period}
                                activity_title={task.activity_title}
                                activity_description={task.activity_description}/>
                })}
            </div>
        );
    }
}

export default TaskList;
```

And then we can pass this.state.tasks as props to TaskList from App.js
```javascript
import React, { Component } from 'react';
import TaskList from './TaskList.js';
import Date from './Date.js';
import Avatar from './Avatar.js';
import AddButton from './AddButton.js';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: [
          {
              'time': '12',
              'period': 'AM',
              'activity_title': 'Finish Tutorial Series',
              'activity_description': '#ReactForNewbies'
          }, {
              'time': '9',
              'period': 'AM',
              'activity_title': 'Meeting with Team Leads',
              'activity_description': 'New Project Kickoff'
          }, {
              'time': '11',
              'period': 'AM',
              'activity_title': 'Call Mom',
              'activity_description': 'Return her call before she kills me'
          }, {
              'time': '3',
              'period': 'PM',
              'activity_title': 'Fix Wifey\'s website',
              'activity_description': 'FB Ads Integration not working'
          }, {
              'time': '6',
              'period': 'PM',
              'activity_title': 'Do DB Backups',
              'activity_description': 'Related to upcoming server migration'
          }
      ]
    }
  }
  render() {
    return (
      <div style={{padding: '30px 30px'}}>
          <Avatar />
          <br />
          <Date />
          <br />
          <TaskList tasks={this.state.tasks} />
          <br />
          <AddButton />
      </div>
    );
  }
}

export default App;
```

Our app would still look the same but this time we are making use of state & props to put everything in their right place.

Now let’s do something more interesting. Let’s try adding a new task. Now that we understand how states work, we know that to add a new task, what we need to do is change the state of our application with an updated list of tasks that includes the new one we want to add.

To do that, we are going to create a function addTask in App.js and then have our AddButton component take this function as a prop! Yep, props are not only for passing data. It’s also possible to pass a function as well!
```javascript

import React, { Component } from 'react';
import TaskList from './TaskList.js';
import Date from './Date.js';
import Avatar from './Avatar.js';
import AddButton from './AddButton.js';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: [
          {
              'time': '12',
              'period': 'AM',
              'activity_title': 'Finish Tutorial Series',
              'activity_description': '#ReactForNewbies'
          }, {
              'time': '9',
              'period': 'AM',
              'activity_title': 'Meeting with Team Leads',
              'activity_description': 'New Project Kickoff'
          }, {
              'time': '11',
              'period': 'AM',
              'activity_title': 'Call Mom',
              'activity_description': 'Return her call before she kills me'
          }, {
              'time': '3',
              'period': 'PM',
              'activity_title': 'Fix Wifey\'s website',
              'activity_description': 'FB Ads Integration not working'
          }, {
              'time': '6',
              'period': 'PM',
              'activity_title': 'Do DB Backups',
              'activity_description': 'Related to upcoming server migration'
          }
      ]
    };
  }
  addTask(){
    var task = {'time': '5', 'period': 'AM', 'activity_title': 'Jogging', 'activity_description': 'Go for a run!'};
    var tasks = this.state.tasks.concat(task);
    this.setState({tasks: tasks});
  }
  render() {
    return (
      <div style={{padding: '30px 30px'}}>
          <Avatar />
          <br />
          <Date />
          <br />
          <TaskList tasks={this.state.tasks} />
          <br />
          <AddButton onClick={this.addTask.bind(this)} />
      </div>
    );
  }
}

export default App;
```

One thing to note here: looking at the AddButton props, we are passing **this.addTask.bind(this)** instead of **this.addTask**. This is because simply calling addTask isn’t going to make our component context-aware. This is important for us to be able to manipulate our state like we are doing in the addTask() function. It is also possible to perform this binding in the constructor like this:
```javascript
this.addTask = this.addTask.bind(this);
```
The other thing to note is in the **addTask()** function, we added the new task to our list of tasks but we also used the setState() function after that. States operate like snapshots. So simply changing the value of something in the state won’t get our components to update. It’s the setState method that causes a reaction if the state changed.

Now let’s edit the AddButton component to handle the actual click event.
```javascript
import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class AddButton extends Component {
    handleClick(){
      this.props.onClick();
    }
    render() {
        return (
            <div>
              <Row>
                <Col xs={10}></Col>
                <Col xs={2}>
                  <Button bsStyle="danger" bsSize="large" onClick={this.handleClick.bind(this)}>
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

Just like on App.js we have to bind the **handleClick()** function here to make it context-aware and all we are doing here is calling the **onClick()** function which got passed as a prop and that in turn will call the initial **addTask()** function.

Voila! Save everything, go to your browser and click on the Add Button.

Cool stuff right? Now refresh your page and see what happens. The task list gets reset back to what we put in the initial state. This is beginning to make a lot of sense right? 😁😁😁

Let’s recap on what we did.

- We extracted tasks into this.state
- We created an addTask function that takes care of updating our state with a new task
- We handled the click event within the AddButton component and made the changes propagate back to the main state of the application.

Your task list must be behaving now according to the tasks you provide, but the task are still unresponsive so let's fix that in a jiffy. First we determine what actions an inidividual task can perform:

- Remove a task
- Mark itself as completed

Let's go backwards for a moment and start editing out **Task.js** file adding a clickability to our font awesome icons and actions that they can perform if passed the correct props.
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
                    <p style={{textAlign: 'center', fontWeight: 'bold', paddingTop: '10px'}}>{this.props.time}
                      <br/>
                      <span>{this.props.period}</span>
                    </p>
                  </div>
                </Col>
                <Col xs={10}>
                  <h4>{this.props.activity_title}</h4>
                  <p>{this.props.activity_description}</p>
                </Col>
                <Col xs={1}>
                  <Row style={{paddingTop: '10px'}}>
                    <Col xs={6}>
                      <a href="#" onClick={this.props.removeTask}>
                        <FontAwesome name='times' />
                      </a>
                    </Col>
                    <Col xs={6}>
                      <a href="#" onClick={this.props.toggleCompleteTask}>
                        <FontAwesome name='check' />
                      </a>
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

The question is, who provides these actions? Is it the **TaskList** or the **App** Component?

To answer this question, we ask ourselves who is the source of truth, who does this data belongs to? Exactly, the App Component. Now that doesn't mean the TaskList does not know about what will happen since to be able to reach Task, App must pass down these state-changing functions throught the TaskList and it will pass it to the inidivual tasks.
```javascript
import React, { Component } from 'react';
import TaskList from './TaskList.js';
import Date from './Date.js';
import Avatar from './Avatar.js';
import AddButton from './AddButton.js';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: [
        {
          'time': '12',
          'period': 'AM',
          'activity_title': 'Finish Tutorial Series',
          'activity_description': '#ReactForNewbies',
          'completed': false
        }, {
          'time': '9',
          'period': 'AM',
          'activity_title': 'Meeting with Team Leads',
          'activity_description': 'New Project Kickoff',
          'completed': true
        }, {
          'time': '11',
          'period': 'AM',
          'activity_title': 'Call Mom',
          'activity_description': 'Return her call before she kills me',
          'completed': false
        }, {
          'time': '3',
          'period': 'PM',
          'activity_title': 'Fix Wifey\'s website',
          'activity_description': 'FB Ads Integration not working',
          'completed': true
        }, {
          'time': '6',
          'period': 'PM',
          'activity_title': 'Do DB Backups',
          'activity_description': 'Related to upcoming server migration',
          'completed': false
        }
      ]
    };
  }
  addTask(){
    var task = {'time': '5', 'period': 'AM', 'activity_title': 'Jogging', 'activity_description': 'Go for a run!'};
    var tasks = this.state.tasks.concat(task);
    this.setState({tasks: tasks});
  }
  removeTask(index) {
    var tasks = [
      ...this.state.tasks.slice(0, index),
      ...this.state.tasks.slice(index + 1),
    ]
    this.setState({tasks: tasks});
  }
  toggleCompleteTask(index) {
    var tasks = this.state.tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    this.setState({tasks: tasks});
  }
  render() {
    return (
      <div style={{padding: '30px 30px'}}>
        <Avatar />
        <br />
        <Date />
        <br />
        <TaskList tasks={this.state.tasks} removeTask={this.removeTask.bind(this)} toggleCompleteTask={this.toggleCompleteTask.bind(this)} />
        <br />
        <AddButton onClick={this.addTask.bind(this)} />
      </div>
    );
  }
}

export default App;
```

As you can see, each task has now a completed property as part of its state, we will play with that part shortly.

Another change are the **removeTask(index)** and **toggleCompleteTask(index)** methods in the App Component which are bound to modify its local state based on the changes we request. Now you might notice some weird syntax in **removeTask(index)**, that will be the ES7 spread operator, yeah, we are using that bleeding edge tech. It allows be to create mergeable subslices of collection objects to avoid modifying the aprent object.

The methods are now being passed at **TaskList** which now owns the responsibility on providing these new props to the **Tasks Components**.

Let's edit TaskList.js
```javascript
import React, {Component} from 'react';
import Task from './Task.js';

class TaskList extends Component {
  render() {
    return (
      <div>
        {this.props.tasks.map(function(task, index) {
          return <Task
            key={index}
            time={task.time}
            period={task.period}
            activity_title={task.activity_title}
            activity_description={task.activity_description}
            completed={task.completed}
            removeTask={() => this.props.removeTask(index)}
            toggleCompleteTask={() => this.props.toggleCompleteTask(index)}
          />
        })}
      </div>
    );
  }
}

export default TaskList;
```

Let's run our app and... Oh, oh?

Apparently, **this** is undefined when adding the functions as props.

This is due to a design implementation from Javascript's side for the handling of **this** references among objects and classes. Each time a function is called, the context of **this** can be changed depending on the functinality of the method called. Again ES6 rescues the day with arrow functions.

They are just not for show, a fantastic part about them is that the context outside of the scope remains intact inside the scope of the function as well, remaining **this** intact.

```javascript
import React, {Component} from 'react';
import Task from './Task.js';

class TaskList extends Component {
  render() {
    return (
      <div>
        {this.props.tasks.map((task, index) => {
          return <Task
            key={index}
            time={task.time}
            period={task.period}
            activity_title={task.activity_title}
            activity_description={task.activity_description}
            completed={task.completed}
            removeTask={() => this.props.removeTask(index)}
            toggleCompleteTask={() => this.props.toggleCompleteTask(index)}
          />
        })}
      </div>
    );
  }
}

export default TaskList;
```

Let's take care rapidly of the complete button and change the style for the text elements with:
```javascript
<h4 style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>{this.props.activity_title}</h4>
                  <p style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>{this.props.activity_description}</p>
```

The next section will handle user input to create new tasks without the 'Jogging' default.
```javascript
import React, { Component } from 'react';
import TaskList from './TaskList.js';
import Date from './Date.js';
import Avatar from './Avatar.js';
import AddButton from './AddButton.js';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newTitle: '',
      newDescription: '',
      tasks: [
        {
          'time': '12',
          'period': 'AM',
          'activity_title': 'Finish Tutorial Series',
          'activity_description': '#ReactForNewbies',
          'completed': false
        }, {
          'time': '9',
          'period': 'AM',
          'activity_title': 'Meeting with Team Leads',
          'activity_description': 'New Project Kickoff',
          'completed': true
        }, {
          'time': '11',
          'period': 'AM',
          'activity_title': 'Call Mom',
          'activity_description': 'Return her call before she kills me',
          'completed': false
        }, {
          'time': '3',
          'period': 'PM',
          'activity_title': 'Fix Wifey\'s website',
          'activity_description': 'FB Ads Integration not working',
          'completed': true
        }, {
          'time': '6',
          'period': 'PM',
          'activity_title': 'Do DB Backups',
          'activity_description': 'Related to upcoming server migration',
          'completed': false
        }
      ]
    };
  }
  addTask(){
    var task = {'time': '5', 'period': 'AM', 'activity_title': 'Jogging', 'activity_description': 'Go for a run!'};
    var tasks = this.state.tasks.concat(task);
    this.setState({tasks: tasks});
  }
  removeTask(index) {
    var tasks = [
      ...this.state.tasks.slice(0, index),
      ...this.state.tasks.slice(index + 1),
    ]
    this.setState({tasks: tasks});
  }
  toggleCompleteTask(index) {
    var tasks = this.state.tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    this.setState({tasks: tasks});
  }
  updateTitleValue(event) {
    this.setState({
      newTitle: event.target.value
    })
  }
  updateDescriptionValue(event) {
    this.setState({
      newDescription: event.target.value
    })
  }
  render() {
    return (
      <div style={{padding: '30px 30px'}}>
        <Avatar />
        <br />
        <Date />
        <br />
        <TaskList tasks={this.state.tasks} removeTask={this.removeTask.bind(this)} toggleCompleteTask={this.toggleCompleteTask.bind(this)} />
        <br />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <input style={{margin: '10px'}} value={this.state.newTitle} placeholder="New task title" onChange={this.updateTitleValue.bind(this)} />
          <input style={{margin: '10px'}} value={this.state.newDescription} placeholder="New task description" onChange={this.updateDescriptionValue.bind(this)} />
        </div>
        <br />
        <AddButton onClick={this.addTask.bind(this)} />
      </div>
    );
  }
}

export default App;
```

The new **App.js** code has some new parts to handle the lifecycle of state for the input elements that will provide the new task with its title and description.

- State now has as properties newTitle and newDescription which tell the input element what to render on the screen
- App has new methods to handle the change event emitted by the same inputs

We can now procede to create a custom new Task changing the code from **App.js**
```javascript
import React, { Component } from 'react';
import TaskList from './TaskList.js';
import Date from './Date.js';
import Avatar from './Avatar.js';
import AddButton from './AddButton.js';
import Moment from 'moment'

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newTitle: '',
      newDescription: '',
      tasks: [
        {
          'time': '12',
          'period': 'AM',
          'activity_title': 'Finish Tutorial Series',
          'activity_description': '#ReactForNewbies',
          'completed': false
        }, {
          'time': '9',
          'period': 'AM',
          'activity_title': 'Meeting with Team Leads',
          'activity_description': 'New Project Kickoff',
          'completed': true
        }, {
          'time': '11',
          'period': 'AM',
          'activity_title': 'Call Mom',
          'activity_description': 'Return her call before she kills me',
          'completed': false
        }, {
          'time': '3',
          'period': 'PM',
          'activity_title': 'Fix Wifey\'s website',
          'activity_description': 'FB Ads Integration not working',
          'completed': true
        }, {
          'time': '6',
          'period': 'PM',
          'activity_title': 'Do DB Backups',
          'activity_description': 'Related to upcoming server migration',
          'completed': false
        }
      ]
    };
  }
  addTask() {
    if (this.state.newTitle && this.state.newDescription) {
      var task = {
        'time': Moment().format('H'),
        'period': Moment().format('A'),
        'activity_title': this.state.newTitle,
        'activity_description': this.state.newDescription
      };
      var tasks = this.state.tasks.concat(task);
      this.setState({
        newTitle: '',
        newDescription: '',
        tasks: tasks
      });
    }
  }
  removeTask(index) {
    var tasks = [
      ...this.state.tasks.slice(0, index),
      ...this.state.tasks.slice(index + 1),
    ]
    this.setState({tasks: tasks});
  }
  toggleCompleteTask(index) {
    var tasks = this.state.tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    this.setState({tasks: tasks});
  }
  updateTitleValue(event) {
    this.setState({
      newTitle: event.target.value
    })
  }
  updateDescriptionValue(event) {
    this.setState({
      newDescription: event.target.value
    })
  }
  render() {
    return (
      <div style={{padding: '30px 30px'}}>
        <Avatar />
        <br />
        <Date />
        <br />
        <TaskList tasks={this.state.tasks} removeTask={this.removeTask.bind(this)} toggleCompleteTask={this.toggleCompleteTask.bind(this)} />
        <br />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <input style={{margin: '10px'}} value={this.state.newTitle} placeholder="New task title" onChange={this.updateTitleValue.bind(this)} />
          <input style={{margin: '10px'}} value={this.state.newDescription} placeholder="New task description" onChange={this.updateDescriptionValue.bind(this)} />
        </div>
        <br />
        <AddButton onClick={this.addTask.bind(this)} />
      </div>
    );
  }
}

export default App;
```
