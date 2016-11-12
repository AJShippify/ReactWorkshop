import React, { Component } from 'react'
import Avatar from './Avatar'
import Date from './Date'
import TaskList from './TaskList'
import AddButton from './AddButton'
import Moment from 'moment'

import { saveTask } from './api'

const App = (props) => (
  <div style={{padding: '30px 30px'}}>
    <header>
      <Avatar />
      <Date />
    </header>
    <br />
    <TaskList
      tasks={props.tasks}
      removeTask={props.removeTask}
      toggleCompleteTask={props.toggleCompleteTask}
    />
    <br />
    <div>
      <input value={props.titleInput} placeholder="Add title" onChange={props.updateTitle} />
      <input value={props.descriptionInput} placeholder="Add description" onChange={props.updateDescription} />
    </div>
    <AddButton onClick={props.saveTaskRemotely} />
  </div>
)

class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleInput: '',
      descriptionInput: '',
      tasks: [
        {
          'time': '12',
          'period': 'AM',
          'activity_title': 'Finish Tutorial Series',
          'activity_description': '#ReactForNewbies',
          completed: false
        }, {
          'time': '9',
          'period': 'AM',
          'activity_title': 'Meeting with Team Leads',
          'activity_description': 'New Project Kickoff',
          completed: false
        }, {
          'time': '11',
          'period': 'AM',
          'activity_title': 'Call Mom',
          'activity_description': 'Return her call before she kills me',
          completed: true
        }, {
          'time': '3',
          'period': 'PM',
          'activity_title': 'Fix Wifey\'s website',
          'activity_description': 'FB Ads Integration not working',
          completed: false
        }, {
          'time': '6',
          'period': 'PM',
          'activity_title': 'Do DB Backups',
          'activity_description': 'Related to upcoming server migration',
          completed: true
        }
      ]
    }
  }
  saveTaskRemotely = () => {
    const now = Moment()
    const task = {
      time: now.format('H'),
      period: now.format('A'),
      activity_title: this.state.titleInput,
      activity_description: this.state.descriptionInput,
      completed: false
    }
    saveTask(task, (success) => {
      if (success) {
        this.addTask(task)
      }
    })
  }
  addTask = (task) => {
    this.setState((previousState, props) => {

      const tasks = previousState.tasks.concat(task)
      return {
        tasks: tasks,
        titleInput: '',
        descriptionInput: ''
      }
    })
  }
  removeTask = (index) => {
    this.setState((previousState, props) => {
      const tasks = [
        ...previousState.tasks.slice(0, index),
        ...previousState.tasks.slice(index + 1)
      ]
      return { tasks: tasks }
    })
  }
  toggleCompleteTask = (index) => {
    this.setState((previousState, props) => {
      const tasks = previousState.tasks.map((task, idx) => {
        if (idx === index) {
          return {
            ...task,
            completed: !task.completed,
          }
        }
        return task
      })
      return { tasks: tasks }
    })
  }
  updateTitle = (event) => {
    this.setState({
      titleInput: event.target.value
    })
  }
  updateDescription = (event) => {
    this.setState({
      descriptionInput: event.target.value
    })
  }
  render() {
    return (
      <App
        tasks={this.state.tasks}
        titleInput={this.state.titleInput}
        descriptionInput={this.state.descriptionInput}
        saveTaskRemotely={this.saveTaskRemotely}
        removeTask={this.removeTask}
        toggleCompleteTask={this.toggleCompleteTask}
        updateTitle={this.updateTitle}
        updateDescription={this.updateDescription}
      />
    )
  }
}

export default AppContainer
