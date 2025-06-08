import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList () {
    let [todo, setTodo] = useState([]);
    let [newtodo, setNewtodo] = useState("");

    let updateTask = (event) => {
        setNewtodo(event.target.value)
    }

    let addTask = () => {
        setTodo((arr)=>{
            return([...arr, {task:newtodo, id:uuidv4()}]);
        });
        setNewtodo("");
    }

    let delTask = (id) => {
        setTodo(todo.filter((i)=>i.id!=id))
    }

    let makeUpper = () =>{
        setTodo(todo.map((i)=>{
            return{
                ...i, task:i.task.toUpperCase()
            }
        }))
    }

    return(
        <div>
            <input type="text" placeholder="type here" onChange={updateTask} value={newtodo}/>
            &nbsp;
            <button onClick={addTask}>Add</button>
            <br />
            <br />
            <br />
            <hr />
            <h3>Tasks todo</h3>
            <ul>
                {
                    todo.map((e)=>
                        (
                            <li key={e.id}>{e.task}
                                &nbsp;&nbsp;&nbsp;
                                <button onClick={() => delTask(e.id)}>Delete</button>
                            </li>
                        )
                    )
                }
            </ul>
            <button onClick={makeUpper}>Make All Upper</button>
        </div>
    );
};