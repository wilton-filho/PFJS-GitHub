import { useState } from "react"

export default function Mensagem({max}) {

    const [cont, setCont] = useState(max);
   
    return (
        <div>
            <form>
                <label htmlFor="">Mensagem: </label><br/>
                <textarea rows={10} maxlength={max} style={{width:"100%"}} onChange={e => setCont(max - e.target.value.length)}></textarea>
            </form>
            <p>Restando {cont} caracteres</p>
            <hr style={{border:"5px solid black"}}/>
        </div>
    )
}

Mensagem.defaultProps = {
    max: 120
}