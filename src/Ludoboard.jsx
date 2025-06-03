import { useState } from "react";
import "./Ludoboard.css";

export default function Ludoboard({colour}){
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
            <button style={{backgroundColor: "blue"}} onClick={bCount}>Blue Count+1</button>
            <p>Red Moves={moves.red}</p>
            <button style={{backgroundColor: "red"}} onClick={rCount}>Red Count+1</button>
            <p>Green Moves={moves.green}</p>
            <button style={{backgroundColor: "green"}} onClick={gCount}>Green Count+1</button>
            <p>Yellow Moves={moves.yellow}</p>
            <button style={{backgroundColor: "yellow"}} onClick={yCount}>Yellow Count+1</button>
        </div>
    );
}