export default function Post(props) {

    // 2ª Opção: uso de função + if
    function showAutor() {
        if (props.autor.toUpperCase() == "HOMEM")
            return <p className="homem">{props.autor}</p>;
        return <p className="mulher">{props.autor}</p>
    }

    return (
        <div className="post">
            <h2>{props.titulo}</h2>
            <p>{props.txt}</p>
            {showAutor()}
            {/* 1ª Opção: uso do operador ternário */}
            {/* {
                (props.autor.toUpperCase() == "HOMEM")?
                <p className="homem">{props.autor}</p>:
                <p className="mulher">{props.autor}</p>
            }    */}
        </div>
    )
}

Post.defaultProps = {
    titulo: "Título genérico",
    txt: "Mensagem genérica",
    autor: "desconhecido"
}