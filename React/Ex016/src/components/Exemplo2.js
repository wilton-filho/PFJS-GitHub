import {useState, useEffect} from 'react';

const Exemplo1 = () => {

    const [cont, setCont] = useState(0);

    // A primeira execução de useEffect irá ocorrer após a renderização do componente (return abaixo). 
    // Logo após, será executado sempre após as próximas renderizações. Neste exemplo, após clicar sobre o btn
    useEffect(() => {
        console.log("-> Executou: useEffect")
        console.log(Math.random());
    }, []); // Segundo parâmetro (array vazio). Irá executar 1 unica vez (após a primeira renderização)

    const msgComponente = (msg) => {
        console.log(msg);
    }
    
    return (
        <>
            {msgComponente("-> Inicio componente")}
            <p>Contador: {cont}</p>
            <button onClick={() => {setCont(cont+1)}}>Incrementar</button>
            {msgComponente("-> Fim componente")}
        </>
    )
}

export default Exemplo1;