// 
const Teste = (props) => {
    return (
        <div>
            {/* Posso escolher onde colocar o {props.children} */}
            {props.children}

            <p>Sou um componente</p>
            
            {/* Posso escolher onde colocar o {props.children} */}
            {props.children}
        </div>
    )
}

export default Teste;