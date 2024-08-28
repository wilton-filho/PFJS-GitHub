import React, { useState } from 'react';

function Formulario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    return (
        <form>
            <label htmlFor="">Nome:</label>
            <input type="text" onChange={e => setNome(e.target.value)}/>
            <p>{nome}</p>

            <label htmlFor="">Email:</label>
            <input type="text" onChange={e => setEmail(e.target.value)}/>
            <p>{email}</p>
        </form>
    );
}

export default Formulario;