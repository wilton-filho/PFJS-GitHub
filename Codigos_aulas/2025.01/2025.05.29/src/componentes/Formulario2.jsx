import React, { useState } from 'react';

function Formulario2() {
    const [nome, setNome] = useState("");
    const [nomeOut, setNomeOut] = useState("");


    function mostrarValor() {
        setNomeOut(nome);
    }

    return (
        <>
            <form action="">
                <label htmlFor="">Nome:</label>
                <input type="text" onChange={e=>setNome(e.target.value)}/>
                <input type="button" value="Ver valor" onClick={mostrarValor}/>
            </form>
            <p>{nomeOut}</p>
        </>
    );
}

export default Formulario2;