import { useState } from "react"

export default function Form() {
    const [nome, setNome] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [msg, setMsg] = useState("");

    function validar() {
        if (nome == "" && email == "" && msg == "")
            alert("Todos os campos devem ser preenchidos");
    }
    return(
        <form>
            <input type="text" value={nome} placeholder="Seu nome" onChange={(e)=>setNome(e.target.value)}/><br/>

            <input type="text" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br/>
            <textarea cols="30" value={msg} rows="10" placeholder="Sua mensagem" onChange={(e)=>setMsg(e.target.value)}></textarea><br/>
            <input type="button" value="Enviar" onClick={()=>validar()}/>
        </form>
    )
}