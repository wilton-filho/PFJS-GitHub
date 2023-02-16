import { useState, useEffect } from 'react';

const Exemplo4 = () => {

    const [cont1, setCont1] = useState(0);
    const [cont2, setCont2] = useState(0);
    const [cont3, setCont3] = useState(0);

    // useEffect sera chamado apenas após a primeira renderização do componente
    // useEffect(() => {
    //     console.log("-> Executou: useEffect")
    // },[]);

    // useEffect sera chamado após a primeira renderização do componente e após a renderizacao dele quando cont1 ou cont3 for atualizado em algum contexto
    useEffect(() => {
        console.log("-> Executou: useEffect");
        console.log(Math.random());
    }, [cont1, cont3]);

    return (
        <>
            <p>Contador 1: {cont1}</p>
            <button onClick={() => { setCont1(cont1 + 1) }}>Incrementar (cont1) + 1</button>

            <p>Contador 2: {cont2}</p>
            <button onClick={() => { setCont2(cont2 + 1) }}>Incrementar (cont2) + 1</button>

            <p>Contador 3: {cont3}</p>
            <button onClick={() => { setCont3(cont3 + 1) }}>Incrementar (cont3) + 1</button>
        </>
    )
}

export default Exemplo4;