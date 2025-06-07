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
                    todo.map((e)=>{
                        return <li key={e.id}>{e.task}</li>
                    })
                }
            </ul>
        </div>
    );
};