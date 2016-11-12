import React from 'react'
import Task from './Task'

const TaskList = (props) => {
  return (
    <div>
      {props.tasks.map((task, index) => {
        return <Task
          key={index}
          time={task.time}
          period={task.period}
          activity_title={task.activity_title}
          completed={task.completed}
          activity_description={task.activity_description}
          removeTask={() => props.removeTask(index)}
          toggleCompleteTask={() => props.toggleCompleteTask(task)}
        />
      })}
    </div>
  )
}

export default TaskList
