import React, { useState } from "react";
import { Tasks } from "../Interface";
import uuid4 from "uuid4";
interface Props {
    tasks: Tasks,
    setTasks: React.Dispatch<React.SetStateAction<Tasks>>
}

// const FormTask:React.FC<{tasks :Tasks, setTasks: React.Dispatch<React.SetStateAction<Tasks>> }> = ({tasks, setTasks})=>{
const FormTask = ({ tasks, setTasks }: Props) => {
    const [data, setData] = useState({ id: "", name: "", dateLeft: 0 })
    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (data.dateLeft && data.name) {
            setTasks([...tasks, { ...data, id: uuid4() }])

            setData({ id: "", name: "", dateLeft: 0 })
        }

    }
    return (
        <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
            <input style={{ marginBottom: "10px" }} name="name" onChange={onChange} value={data.name}></input>
            <input style={{ marginBottom: "10px" }} name="dateLeft" type="number" onChange={onChange} value={data.dateLeft}></input>
            <button style={{ width: "30%", margin: "0 auto" }}>Submit</button>
        </form>
    )
}
export default FormTask;