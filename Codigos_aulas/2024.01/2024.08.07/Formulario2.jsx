import React, { useState } from 'react';

function Formulario2() {

    const [form, setForm] = useState({
        nome: "",
        email: ""
    });

    function handleChange(e) {
        const {name, value, type} = e.target;
        
    } 

    return (
        <form>
            <label htmlFor="">Nome:</label>
            <input type="text" name="nome" onChange={handleChange}/>
            <p>{form.nome}</p>

            <label htmlFor="">Email:</label>
            <input type="email" name="email" onChange={handleChange}/>
            <p>{form.email}</p>
        </form>
    );
}

export default Formulario2;