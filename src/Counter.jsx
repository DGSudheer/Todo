import { useState } from "react";

export default function Counter(){
    let [count, setCounter] = useState(0);
    let IncCount = () => {
        setCounter(
            (val) => {
                val +=1;
                return val;
            } 
        )
    }

    let ZeroMaker = () => {
        setCounter(0);
    }
    return(
        <div>
        <p>
            <button onClick={IncCount}>Press</button> Counts = {count}
        </p>
        <p>
            <button onClick={ZeroMaker}>
                Zero
            </button>
        </p>
        </div>
    );
}