import {useState} from 'react';

const Contador = (props) => {
    
    // Hooks são utilizados apenas dentro de function components
    // useState é uma função da biblioteca 'react' do React que retorna 2 valores
    // useState(0): 0 é o valor inicial
    const [cont, setCont] = useState(0);
    
    const incrementar = () => {
        setCont(cont+1);
        console.log(cont);
    }

    return (
        <div className="container">
            <h1>Contador {props.nome}</h1>
            <p>Contador: {cont}</p>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default Contador;