import { useContext } from "react";
import React from "react";
import { todoContext } from "../Context/todoProvider";
import { Tasks } from "../Interface";
import TaskItem from "./taskItem";




const TaskList = () => {
//    const {tasks, setTasks} = useContext(todoContext)
const context = useContext(todoContext);
const tasks = context ? context.tasks : [];
const setTasks = context ? context.setTasks : () => {};

// Rest of your code...


    return (
        <div>
            {
                tasks.map((item) => {
                    return (
                        <div >
                            <TaskItem key={item.id} id={item.id} name={item.name} dateLeft={item.dateLeft}></TaskItem>
                        </div>
                    )
                }

                )
            }
        </div>
    )
}

export default TaskList;