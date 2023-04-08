import React from 'react'
import style from '../styles/Task.module.css'

const Task = ({ titulo }) => {

  return (
    <div className={style.TaskTitleContainer}>
      <h1>{titulo}</h1>
    </div>  
  )
}

export default Task
