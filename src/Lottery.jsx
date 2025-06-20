import "./Lottery.css";
import { useState } from "react";
import { generateRandom, sum } from "./helper.js";

export default function Lottery(){
    let [ticket, setTicket] = useState([0,0,7]);
    let buyTicket = () => {
        setTicket(generateRandom(3))
    }

    let win = sum(ticket) == 10;

    return(
        <div>
            <h2>Lottery Game</h2>
            <h4>{win?"lottery conjajulations!":""}</h4>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={buyTicket}>Buy one more</button>
        </div>
    )
}

