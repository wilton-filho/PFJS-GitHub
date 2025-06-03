import React, { useState } from 'react';

function Formulario4() {
    const [usuarioIn, setUsuario] = useState({nome: "", email: ""});
    const [usuarioOut, setUsuarioOut] = useState(null);

    function handleChange(e) {
        setUsuario({...usuarioIn,[e.target.name]:e.target.value});
    }

    function mostrarValor() {
        if (!usuarioIn.nome.trim()) alert("Nome inválido. Tente novamente");
        else if (!usuarioIn.email.trim()) alert("Email inválido. Tente novamente");
        else setUsuarioOut({...usuarioIn});
    }
    return (
        <>
            <form action="">
                <label htmlFor="">Nome:</label>
                <input type="text" name="nome" onChange={handleChange}/>

                <label htmlFor="">Email:</label>
                <input type="text" name="email" onChange={handleChange}/>
                
                <input type="button" value="Ver valor" onClick={mostrarValor}/>
            </form>
            {usuarioOut && (
                <>
                    <p>Nome: {usuarioOut.nome}</p>
                    <p>Email: {usuarioOut.email}</p>
                </>
            )}
        </>
    );
}

export default Formulario4;