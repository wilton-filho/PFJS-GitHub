import { useState } from "react"
import Paragrafo from './Paragrafo'

export default function MostrarParagrafos () {

    const [paragrafos, setParagrafos] = useState(["Parágrafo 1 (interface)", "Parágrafo 2 (interface)"]);
    const [novoParagrafo, setNovoParagrafo] = useState("");

    function adicionarParagrafo(e) {
        e.preventDefault();
        setParagrafos([...paragrafos, novoParagrafo.concat(" (usuário)")]);
    }

    return (
        <div>
            {paragrafos.map((p,index) => <Paragrafo key={index} texto={p}/>)}
            <form>
                <input type="text" onChange={e => setNovoParagrafo(e.target.value)} />
                <button type="button" onClick={adicionarParagrafo}>Adicionar parágrafo</button>
            </form>
        </div>
    )








        // <form onSubmit={handleSubmit}>
        //     <label htmlFor="">Top: </label>
        //     <input type="text" onChange={(e)=>setTop(e.target.value)}/>
        //     <br/><br/>

        //     <label htmlFor="">Left: </label>
        //     <input type="text" onChange={(e)=>setLeft(e.target.value)}/>
        //     <br/><br/>

        //     <input type="submit" value="Exibir figura"/>

        //     <p>Parágrafo 1</p>
        // </form>
}