import {useState, useEffect} from 'react';

const Exemplo3 = () => {

    const [cont1, setCont1] = useState(0);
    const [cont2, setCont2] = useState(0);

    // useEffect sera chamado apenas após a primeira renderização do componente
    // useEffect(() => {
    //     console.log("-> Executou: useEffect")
    // },[]);

    // useEffect sera chamado após a primeira renderização do componente e após a renderizacao dele quando cont1 for atualizado em algum contexto
    useEffect(() => {
        console.log("-> Executou: useEffect");
        console.log(Math.random());
    }, [cont1]);

    return (
        <>
            <p>Contador 1: {cont1}</p>
            <button onClick={() => {setCont1(cont1 + 1)}}>Incrementar (cont1) + 1</button>
            <button onClick={() => {setCont1(cont1 + 10)}}>Incrementar (cont1) + 10</button>

            <p>Contador 2: {cont2}</p>
            <button onClick={() => {setCont2(cont2 + 1)}}>Incrementar (cont2) + 1</button>
        </>
    )
}

export default Exemplo3;