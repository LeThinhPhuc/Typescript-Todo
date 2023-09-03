import React, { useEffect, useState } from "react";
import FormTask from "./components/formTask";
import TaskList from "./components/taskList";
import './App.css'

import { TodoProvider } from "./Context/todoProvider";

import { Tasks } from "./Interface";
// export interface Tasks{
//   task:{
//     name: string,
//     dateLeft: number,
//   }[]
// }

const storedTasks = localStorage.getItem("tasks");
const initialTasks: Tasks = storedTasks ? JSON.parse(storedTasks) : [];

const App: React.FC = () => {

  // const [tasks, setTasks] = useState<Tasks["task"]>([{
  const [tasks, setTasks] = useState<Tasks>(initialTasks)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div>
      <TodoProvider>
      <FormTask ></FormTask>
      <TaskList></TaskList>
      </TodoProvider>
    </div>
  )
}
export default App;