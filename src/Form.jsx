import { useState } from "react";

export default function Form(){
    // let [fullName, setFullName]=useState("");
    // let [username, setUsername] = useState("");
    // let handleFullName = (event)=>{
    //     console.log(`fullname:${fullname.value}`)
    //     setFullName(event.target.value);
    // }
    // let handleUsername = (event)=>{
    //     console.log(`username:${username.value}`);
    //     setUsername(event.target.value);
    // }
    let [formdata, setFormdata] = useState({
        fullName: "",
        username: "",
        password: ""
    });

    let handleFormInputs = (event)=>{
        setFormdata(
            (curr)=>{
                //curr[event.target.name]=event.target.value;
                return{...curr, [event.target.name]:event.target.value};
            }
        );
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        setFormdata({
            fullName:"",
            username:"",
            password:""
        });
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullname"> Enter your Full Name</label> &nbsp;
                <input type="text" placeholder="enter full name" id="fullname" value={formdata.fullName} onChange={handleFormInputs} name="fullName"/><br />
                <label htmlFor="username">User Name</label>
                <input type="text" placeholder="enter user name" id="username" value={formdata.username} onChange={handleFormInputs} name="username"></input><br />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="password" id="password" value={formdata.password} onChange={handleFormInputs} name="password"/>
                <button>Submit</button>
            </form>
        </div>
    )
}