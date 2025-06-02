import { useState } from "react";

export default function Ludoboard({colour}){
    let styles = {backgroundColor: colour}
    return (
        <div style={styles}>
            {colour}
        </div>
    );
}