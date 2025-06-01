import {use, useState} from "react";

export default function Like() {
    let [isLiked, setIsLiked] = useState(false);
    
    //let LikeSwitch = () => {
    //    setIsLiked(!isLiked);
    //}

    let LikeSwitch = () => {
        setIsLiked(
            (val) => {
                val = !val;
                return val;
            }
        )
    }

    let styles = { color : "blue" }

    return(
        <p onClick={LikeSwitch} >
            {
                isLiked ? (<i className="fa-solid fa-thumbs-up" style={styles}></i>) : (<i className="fa-regular fa-thumbs-up"></i>)
            }
        </p>
    );
}