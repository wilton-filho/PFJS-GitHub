import React, { useState } from 'react';

function Formulario2() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [nomeOut, setNomeOut] = useState("");
    const [emailOut, setEmailOut] = useState("");


    function mostrarValor() {
        setNomeOut(nome);
        setEmailOut(email);
    }

    return (
        <>
            <form action="">
                <label htmlFor="">Nome:</label>
                <input type="text" onChange={e=>setNome(e.target.value)}/>

                <label htmlFor="">Email:</label>
                <input type="text" onChange={e=>setEmail(e.target.value)}/>
                
                <input type="button" value="Ver valor" onClick={mostrarValor}/>
            </form>
            <p>Nome: {nomeOut}</p>
            <p>Email: {emailOut}</p>
        </>
    );
}

export default Formulario2;