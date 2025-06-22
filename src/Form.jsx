import { useState } from "react";

export default function Form(){
    let [fullName, setFullName]=useState("");
    let [username, setUsername] = useState("");
    let handleFullName = (event)=>{
        console.log(`fullname:${fullname.value}`)
        setFullName(event.target.value);
    }
    let handleUsername = (event)=>{
        console.log(`username:${username.value}`);
        setUsername(event.target.value);
    }
    return(
        <div>
            <form action="/">
                <label htmlFor="fullname"> Enter your Full Name</label> &nbsp;
                <input type="text" placeholder="enter full name" id="fullname" value={fullName} onChange={handleFullName}/><br />
                <label htmlFor="username">User Name</label>
                <input type="text" placeholder="enter user name" id="username" value={username} onChange={handleUsername}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}