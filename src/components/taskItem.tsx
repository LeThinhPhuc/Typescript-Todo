import React, { useState } from "react";

import { useContext } from "react";
import { todoContext } from "../Context/todoProvider";
interface TaskItemProps {
    id: string;
    name: string;
    dateLeft: number;
}
const TaskItem = ({ name, dateLeft, id}: TaskItemProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const [data, setData] = useState({ name: "", dateLeft: 0 })


    const context = useContext(todoContext);
    const { tasks, setTasks } = context || { tasks: [], setTasks: () => {} };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const onDelete = ()=>{
        const updatedTasks = tasks.filter((task) => task.id !== id);
        // Cập nhật state
        setTasks(updatedTasks);
    }

    const onEdit = (name:string, dateLeft:number)=>{
        const tmp = [...tasks];
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i].id === id) {
                tmp[i].name = name ? name : tmp[i].name;
                tmp[i].dateLeft = dateLeft ? dateLeft : tmp[i].dateLeft
            }
        }
        console.log(tmp);
        setTasks(tmp);
    }
    return (
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "gray", borderRadius: "8px", marginBottom: "8px", marginTop: "8px" }}>

            {
                open ? (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <input name="name" onChange={onChange} value={data.name}></input>
                        <input name="dateLeft" onChange={onChange} type="number" value={data.dateLeft}></input>
                    </div>
                ) : (
                    <div>
                        <div>{name}</div>
                        <div>{dateLeft}</div>
                    </div>
                )
            }
            <div style={{ display: "flex", flexDirection: "column" }}>
                <button onClick={onDelete}>x</button>
                {
                    open ? (<button onClick={() => { setOpen(!open); onEdit(data.name, data.dateLeft) }}>👌</button>) : (<button onClick={() => setOpen(!open)}>🖊</button>)
                }

            </div>
        </div>
    )
}
export default TaskItem;