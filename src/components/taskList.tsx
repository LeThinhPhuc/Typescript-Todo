import React from "react";
import { Tasks } from "../Interface";
import TaskItem from "./taskItem";
const TaskList: React.FC<{ tasks: Tasks, setTasks: React.Dispatch<React.SetStateAction<Tasks>> }> = ({ tasks, setTasks }) => {
    const handleDelete = (idTemp: string): void => {
        const updatedTasks = tasks.filter((task) => task.id !== idTemp);
        // Cập nhật state
        setTasks(updatedTasks);

    }

    const handleEdit = (id: string, name: string, dateLeft: number): void => {

        const tmp = [...tasks];
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i].id === id) {
                tmp[i].name = name ? name : tmp[i].name;
                tmp[i].dateLeft = dateLeft ? dateLeft : tmp[i].dateLeft
            }
        }
        setTasks(tmp);

    }
    return (
        <div>
            {
                tasks.map((item) => {
                    return (
                        <div >
                            <TaskItem onEdit={handleEdit} onDelete={handleDelete} key={item.id} id={item.id} name={item.name} dateLeft={item.dateLeft}></TaskItem>
                        </div>
                    )
                }

                )
            }
        </div>
    )
}

export default TaskList;