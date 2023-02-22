const Contador = (props) => {
    var cont = 0;

    const incrementar = () => {
        cont++;
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