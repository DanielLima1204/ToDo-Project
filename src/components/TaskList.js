import React from 'react'
import Task from './Task'
import style from '../styles/TaskList.module.css'
import { TasksContext } from '../TasksContext'
import NoTasks from './NoTasks'

const TaskList = () => {
  const TasksManager = React.useContext(TasksContext)

  function handleDeleteClick(id) {
    TasksManager.deleteTask(id)
  }

  function handleCompletedClick(id) {
    TasksManager.setTaskCompleted(id)
  }

  return (
    <div>
      {TasksManager.taskList.length === 0 && (
        <NoTasks title="Parece que não existem Tarefas!" />
      )}
      {TasksManager.taskList.length > 0 && TasksManager.taskList.map((task, index) => {
        return (
        <div className={style.TaskListContainer} key={index}>
          <div className={style.TaskCard}>  
              <input type="checkbox" name="" id="" checked={task.completed} onChange={() => handleCompletedClick(index)}/>
              <Task titulo={task.titulo} />
              <button onClick={() => handleDeleteClick(index)}>X</button>
          </div>
        </div>  
        ) 
      })}
    </div>
  )
}

export default TaskList
