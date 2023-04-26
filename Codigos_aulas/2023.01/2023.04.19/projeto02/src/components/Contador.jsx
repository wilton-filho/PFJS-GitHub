import { useState } from "react";

export default function Contador() {

    const [cont, setCont] = useState(0);

    function incrementar() {
        setCont(cont+1);
    }

    return (
        <div>
            <p>Contador: {cont}</p>
            <button onClick={incrementar}>Incrementar</button>
            <p>Testando ... {cont}</p>
        </div>
    )
}