import React, { useEffect, useState } from 'react';

function Contadores() {

    const [cont1, setCont1] = useState(0);
    const [cont2, setCont2] = useState(0);

    useEffect(()=>{
        console.log(Math.random());
    }); // roda apos a montagem do componente e sempre q houver alteração de estado
    // },[]); // roda uma unica vez (após montagem do componente)
    // },[cont1]); // roda após montagem do componente e após alteração do estado do componente, a partir da variavel de estado "cont1"
    // },[cont1, cont2]);

    return (
        <>
            <form>
                <input type="button" value="Contador 1: Incrementar +1" onClick={()=>setCont1(cont1+1)}/>
                <input type="button" value="Contador 2: Incrementar +2" onClick={()=>setCont2(cont2+2)}/>
            </form>
            <p>Contador 1: {cont1}</p>
            <p>Contador 2: {cont2}</p>
        </>
    );
}

export default Contadores;