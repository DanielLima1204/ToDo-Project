import React from "react";

export const TasksContext = React.createContext();

export const TasksOptions = ({children}) => {
  const [taskList, setTaskList] = React.useState(() => {
    return JSON.parse(localStorage.getItem('tarefas')) || []
  })

  function refreshLocalStorage(key, item){
    localStorage.setItem(key, JSON.stringify([...item]))
  }

  function setTaskCompleted(id){
    taskList.map((task, index) => {
      if(index === id) {
        task.completed = !task.completed
      }
      setTaskList([...taskList]);
      refreshLocalStorage('tarefas', taskList);
      return null
  })
  }

  function deleteTask(id) {
    const newTaskList = []
    taskList.map((task, index) => {
      if(index !== id){
        newTaskList.push(task)
      }
      return null
  })
    setTaskList(newTaskList)
    refreshLocalStorage('tarefas', newTaskList);  
  }

  return (
    <TasksContext.Provider value={{taskList, setTaskList, deleteTask, setTaskCompleted}}>
      {children}
    </TasksContext.Provider>
  )
} 