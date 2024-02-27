import {createContext, useContext} from 'react'
export const TodoContext = createContext({
    Todos:[{
        id:1,
        todo:"Todo msg",
        completed:false,
    }],
    addToDo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTdo:(id)=>{},
    toggleComplete:(id)=>{}
})


export const useTodo=()=>{
return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider