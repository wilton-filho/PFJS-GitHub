const App = () => {
    const estilo = {
        color: 'orange',
        textDecoration: 'underline'
    }

    return (
        <>
            <h1>Hello, World!</h1>
            <p className="texto">Sou um texto</p>
            {/* Exemplo 01 de CSS inline. Note o uso de camelCase */}
            <p style={{color: 'pink', fontSize:'50px'}}>Wilton Filho</p>
            {/* Exemplo 02 de CSS inline. */}
            <p style={estilo}>Sistemas</p>
            {/* Exemplo 03: uso de props (se tivesse) */}
            {/* <p style={{color: props.cor}}>Sistemas</p> */}
        </>
    );
}

export default App;