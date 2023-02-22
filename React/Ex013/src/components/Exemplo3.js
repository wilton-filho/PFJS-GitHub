import {useState, useEffect} from 'react';

const Exemplo2 = () => {

    const [cont1, setCont1] = useState(0);
    const [cont2, setCont2] = useState(0);

    // A primeira execução de useEffect irá ocorrer após a renderização do componente. Logo após, será executado sempre após as próximas renderizações.
    // Note nesse exempo que useEffect será sempre executado após a renderização do componente (onClick do btn1 ou btn2)
    useEffect(() => {
        console.log("-> Executou: useEffect");
        console.log(Math.random());

    });

    return (
        <>
            <p>Contador 1: {cont1}</p>
            <button onClick={() => {setCont1(cont1 + 1)}}>Incrementar</button>

            <p>Contador 2: {cont2}</p>
            <button onClick={() => {setCont2(cont2 + 1)}}>Incrementar</button>
        </>
    )
}

export default Exemplo2;