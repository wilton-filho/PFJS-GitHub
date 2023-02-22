import {useState} from 'react';

const Produto1 = () => {

    const [nome, setNome] = useState("Nenhum");
    const [valor, setValor] = useState(0);

    return (
        <div className="container">
            <h1>Informe abaixo os dados do produto</h1>
            <form>
                <label htmlFor="txtNome">Nome do produto:</label>
                <input type="text" id="txtNome" onChange={(e)=>{setNome(e.target.value)}}/>

                <label htmlFor="txtValor">Valor do produto:</label>
                <input type="number" id="txtValor" onChange={(e)=>{setValor(e.target.value)}}/>
            </form>

            <h2>Dados do produto</h2>
            <p>Nome = {nome}</p>
            <p>Valor = R${valor},00</p>
        </div>
    )
}

export default Produto1;
