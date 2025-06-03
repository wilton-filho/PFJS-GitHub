// Dependência a ser instalada
// npm install @emailjs/browser
// Configurar no site https://www.emailjs.com/:
// - New Email Services (Service ID)
// - New Template (Template ID)
// - Account (Public Key)


import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from './Formulario5.module.css';

function Formulario5() {
    const [msgEnvio, setMsgEnvio] = useState("");
    const [usuarioIn, setUsuarioIn] = useState({
        nome: "",
        email: "",
    });

    //from_name e from_email: configurados no site Emailjs.com
    const templateParams = {
        from_name: usuarioIn.nome,
        from_email: usuarioIn.email,
        message:"Email do aplicativo"
    };

    function handleChange(e) {
        setUsuarioIn({ ...usuarioIn, [e.target.name]: e.target.value });
    }

    function mostrarValor(e) {
        e.preventDefault();
        if (!usuarioIn.nome.trim()) alert("Nome inválido. Tente novamente");
        else if (!usuarioIn.email.trim()) alert("Email inválido. Tente novamente");
        else {
            emailjs
                .send()
                .then(
                    function (response) {
                        setUsuarioIn({...usuarioIn, nome:"", email:""});
                        setMsgEnvio("Email enviado com sucesso!");
                    },
                    function (error) {
                        setMsgEnvio("ERRO ao enviar email!");
                    }
                );
            setMsgEnvio("Aguarde um instante! Enviando ...");
        }
    }
    return (
        <>
            <form action="">
            <label htmlFor="">Nome:</label>
            <input type="text" name="nome" onChange={(e) => handleChange(e)} value={usuarioIn.nome}/>

            <label htmlFor="">Email:</label>
            <input type="text" name="email" onChange={(e) => handleChange(e)} value={usuarioIn.email}/>

            <input type="submit" value="Enviar email" onClick={(e)=>mostrarValor(e)} />
            </form>
            <p>{msgEnvio}</p>
        </>
    );
}

export default Formulario5;
