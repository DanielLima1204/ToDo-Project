import React from 'react'
import Swal from 'sweetalert2';
import style from '../styles/Form.module.css'
import { TasksContext } from '../TasksContext';

const Form = () => {
  const TasksManager = React.useContext(TasksContext)
  
  const [titulo, setTitulo] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault()
    
    const task = {
      'titulo': titulo,
      'completed': false
    }

    function checkIfTaskAlreadyExist() {
      let taskAlreadyExist = false
      TasksManager.taskList.map((taskInTheList) => { 
        if(String(taskInTheList.titulo).toLowerCase() === String(task.titulo).toLowerCase()) {
          return taskAlreadyExist = true; 
        }
        return null
      });
      return taskAlreadyExist
    }

    if(checkIfTaskAlreadyExist() === false) {
      TasksManager.setTaskList([...TasksManager.taskList, task]);
      localStorage.setItem('tarefas', JSON.stringify([...TasksManager.taskList, task]));
    } else {
      Swal.fire("Esta tarefa já existe!");
    }
    setTitulo('');
  }
  
  return (
    <section className={style.formSection}>
        <form className={style.formBox} onSubmit={(event) => handleSubmit(event)}>
          <div>  
            <h1>Cuidee!</h1>
          </div>  
          <div className={style.formDivTitle}>
            <input required type="text" id='task-title' placeholder='Tarefa...' value={titulo} onChange={({target}) => setTitulo(target.value)}/>
            <button type="submit">+</button>
          </div>
          <div>
            <p className={style.FormLine}></p>
          </div>  
        </form>
    </section>    
  )
}

export default Form