import React, { useState } from 'react';

function Formulario1() {
    const [nome, setNome] = useState("");

    return (
        <>
            <form action="">
                <label htmlFor="">Nome:</label>
                <input type="text" onChange={e=>setNome(e.target.value)}/>
            </form>
            <p>{nome}</p>
        </>
    );
}

export default Formulario1;