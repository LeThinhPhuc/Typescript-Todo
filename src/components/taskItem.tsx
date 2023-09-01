import React, { useState } from "react";
interface TaskItemProps {
    id: string;
    name: string;
    dateLeft: number;
    onDelete: (id: string) => void;
    onEdit: (id: string, name: string, dateLeft: number) => void;
}
const TaskItem = ({ name, dateLeft, id, onDelete, onEdit }: TaskItemProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const [data, setData] = useState({ name: "", dateLeft: 0 })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setData({ ...data, [e.target.name]: e.target.value })
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
                <button onClick={() => onDelete(id)}>x</button>
                {
                    open ? (<button onClick={() => { setOpen(!open); onEdit(id, data.name, data.dateLeft) }}>👌</button>) : (<button onClick={() => setOpen(!open)}>🖊</button>)
                }

            </div>
        </div>
    )
}
export default TaskItem;