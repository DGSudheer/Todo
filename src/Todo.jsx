//Todo
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function Todo() {
    let[todo, setTodo] = useState([])
    let[newTodo, setNewTodo] = useState("")

    let newTask = (event)=>{
        setNewTodo(event.target.value);
    }
    let addNew = ()=>{
        setTodo((todo)=>{
            return ([...todo, {task:newTodo, id:uuidv4()}])
        })
        setNewTodo("")
    }
    let deleteTask = (id) => {
        setTodo(todo.filter((todo)=>todo.id!=id))
    }
    // let makeAllUpper = () => {
    //     setTodo(todo.filter((todo)=>todo.task=todo.task.toUpperCase()))
    // }
    let makeAllUpper = ()=>{
        setTodo((todo)=>
            todo.map((t)=>{
                return {
                    ...t, task: t.task.toUpperCase()
                }
            }
            )
        )
    }
    // let makeAllLower = () => {
    //     setTodo((todo)=>{
    //         return(todo.filter((todo)=>todo.task=todo.task.toLowerCase()))
    //     })
    // }
    let makeAllLower = () =>{
        setTodo((prev)=>
            prev.map((t)=>{
                return{...t, task: t.task.toLowerCase()}
            })
        )
    }
    let makeUpper = (id) => {
        setTodo((prev)=>
            prev.map((t)=>{
                if(t.id===id)
                    return{...t, task:t.task.toUpperCase()}
                else
                    return t;
            })
        )
    }
    let makeLower = (id)=>{
        setTodo((prev)=>
            prev.map((t)=>{
                if(t.id===id)
                    return{...t, task:t.task.toLowerCase()}
                else
                    return t;
            })
        )
    }

    return(
        <div>
            <input type="text" placeholder="enter your task here" onChange={newTask} value={newTodo}/>
            &nbsp; &nbsp; &nbsp;
            <button onClick={addNew}>Add</button>
            <br /> <br />
            <hr />
            <h4>List of Tasks Todo</h4>
            <ul>
                {
                    todo.map((t)=>{
                        return(
                            <li key={t.id}>{t.task}
                                <button onClick={()=>deleteTask(t.id)}>Delete</button>
                                <button onClick={()=>makeUpper(t.id)}>UPPER</button>
                                <button onClick={()=>makeLower(t.id)}>lower</button>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={makeAllUpper}>Make All Upper</button> &nbsp; &nbsp;
            <button onClick={makeAllLower}>Make All Lower</button>
        </div>
    )
}