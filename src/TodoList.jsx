import { useState } from "react";

export default function TodoList () {
    let [todo, setTodo] = useState([]);
    let [newtodo, setNewtodo] = useState("");

    let updateTask = (event) => {
        setNewtodo(event.target.value)
    }

    let addTask = () => {
        setTodo((arr)=>{
            return([...arr, newtodo]);
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
                        return <li>{e}</li>
                    })
                }
            </ul>
        </div>
    );
};