import React, { useState, Component } from 'react';
import '../css/style.css';

const Exemplo02ComHooks = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    return (
        <section>
            <p>Valor atual: {count}</p>
            <button onClick={() => increment()}>Adicionar</button>
        </section>
    );    
}

export default Exemplo02ComHooks;