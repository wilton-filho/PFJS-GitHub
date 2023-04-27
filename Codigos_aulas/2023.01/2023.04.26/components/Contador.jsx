import { useState } from "react";

export default function Contador() {
    
    const [cont, setCont] = useState(0);

    function incrementar() {
        setCont(cont+1);
    }
    
    return (
        <div>
            <button onClick={incrementar}>Incrementar</button>
            <p>Contador: {cont}</p>
            <hr style={{border:"5px solid black"}}/>
        </div>
    )
}