import { useState } from "react";
import "./Ludoboard.css";

export default function Ludoboard({colour}){
    let styles = {backgroundColor: colour}
    /* let [count, setCount] = useState(0);
    let incCount = () => {
        setCount(count+1);
    } */

    let [moves, setMoves] = useState({blue:0, red:0, green:0, yellow:0});
    let bCount = () => {
        setMoves((prev)=>{
            return ({...prev, blue: prev.blue+1})
        })
    }

    let rCount = () => {
        setMoves((prev)=>{
            return ({...prev, red: prev.red+1})
        })
    }

    let gCount = () => {
        setMoves((prev)=>{
            return ({...prev, green: prev.green+1})
        })
    }

    let yCount = () => {
        setMoves((prev)=>{
            return ({...prev, yellow: prev.yellow+1})
        })
    }

    return (
        <div>
            <p>Blue Moves={moves.blue}</p>
            <button onClick={bCount}>Blue Count+1</button>
            <p>Red Moves={moves.red}</p>
            <button onClick={rCount}>Red Count+1</button>
            <p>Green Moves={moves.green}</p>
            <button onClick={gCount}>Green Count+1</button>
            <p>Yellow Moves={moves.yellow}</p>
            <button onClick={yCount}>Yellow Count+1</button>
        </div>
    );
}