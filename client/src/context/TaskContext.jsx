import { createContext, useContext, useState } from "react";
import {createTaskRequest, getTasksRequest, deleteTaskRequest} from '../api/task'

const TaskContext = createContext();

export const useTasks = ()=>{
    const context = useContext(TaskContext);
    if(!context){
        throw new Error('falta el taskprovider');
    }
    return context;
}

export function TaskProvider({children}){
    const [tasks, setTasks] = useState([]);
    const createTask = async(task)=>{
        await createTaskRequest(task);
        

    }

    const getTasks = async()=> {
        const tasksList = await getTasksRequest();
        setTasks(tasksList.data);
    }

    /*const deleteTask = async(id)=>{
        try{
            const res = await deleteTaskRequest(id);
        
        if(res.status ===204 ){
            const newTasks = tasks.filter(task => {task._id !== id});
            setTasks(newTasks);
        }

        }catch(error){
            console.log(error);
        }



    }*/

    return(
        <TaskContext.Provider 
        value={{tasks,
        createTask,
        getTasks,
       // deleteTask
        
        }}>
            {children}
        </TaskContext.Provider>
    )
}