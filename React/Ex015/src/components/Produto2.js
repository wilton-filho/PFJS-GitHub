import {useState} from 'react';

const Produto1 = () => {

    const [nome, setNome] = useState("Nenhum");
    const [valor, setValor] = useState(0);
    // Dados para exibição
    const [nomeScreen, setNomeScreen] = useState("Nenhum");
    const [valorScreen, setValorScreen] = useState(0);

    const alterarProduto = (e) => {
        e.preventDefault();
        setNomeScreen(nome);
        setValorScreen(valor);
    }

    return (
        <div className="container">
            <h1>Informe abaixo os dados do produto</h1>
            <form>
                <label htmlFor="txtNome">Nome do produto:</label>
                <input type="text" id="txtNome" onChange={(e)=>{setNome(e.target.value)}}/>

                <label htmlFor="txtValor">Valor do produto:</label>
                <input type="number" id="txtValor" onChange={(e)=>{setValor(e.target.value)}}/>
                <button onClick={alterarProduto}>Alterar</button>
            </form>

            <h2>Dados do produto</h2>
            <p>Nome = {nomeScreen}</p>
            <p>Valor = R${valorScreen},00</p>
        </div>
    )
}

export default Produto1;
