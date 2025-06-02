import { useState } from "react";
import "./Ludoboard.css";

export default function Ludoboard({colour}){
    let styles = {backgroundColor: colour}
    let [count, setCount] = useState(0);
    let incCount = () => {
        setCount(count+1);
    }

    return (
        <div className="Block" style={styles}>
            <button onClick={incCount}>{colour} Count={count}</button>
        </div>
    );
}