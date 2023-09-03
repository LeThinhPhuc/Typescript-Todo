import React, { createContext, ReactNode, useState, useEffect } from "react";
import { Tasks } from "../Interface";
import { Task } from "../Interface";
interface TodoProviderProps {
    children: ReactNode;
}




// export const todoContext = createContext<any>(null);

// export const todoContext = createContext<{ tasks: Tasks[]; setTasks: React.Dispatch<React.SetStateAction<Tasks[]>> } | null>(null);

// export const todoContext = createContext<{ tasks: Task[]; setTasks: React.Dispatch<React.SetStateAction<Task[]>> } | null>(null);

export const todoContext = createContext<{ tasks: Task[]; setTasks: React.Dispatch<React.SetStateAction<Task[]>> } | null>(null);


const storedTasks = localStorage.getItem("tasks");
const initialTasks: Tasks = storedTasks ? JSON.parse(storedTasks) : [];
export const TodoProvider = ({ children }: TodoProviderProps) => {
    // Your context provider logic goes here

    const [tasks, setTasks] = useState<Tasks>(initialTasks)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])



    return (
        <todoContext.Provider value={{ tasks, setTasks }}>
            {children}
        </todoContext.Provider>
    );
};
