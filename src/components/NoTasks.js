import React from 'react'
import style from '../styles/NoTasks.module.css'

const NoTasks = ({title}) => {
  return (
    <div className={style.Container}>
      <h3>
        {title}
      </h3>
    </div>
  )
}

export default NoTasks