import React from "react";
import './styles/reset.css'
import style from './styles/App.module.css'
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import { TasksOptions } from "./TasksContext";


function App() {
  
  return (
    <>
      <TasksOptions>
        <section className={style.AppSection}>
          <Form />
          <TaskList />
        </section>
      </TasksOptions>
    </>
  );
}

export default App;
