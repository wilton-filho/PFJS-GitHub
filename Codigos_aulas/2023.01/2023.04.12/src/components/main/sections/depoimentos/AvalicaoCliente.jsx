export default function AvaliacaoCliente(props) {
    return (
        <div className="avalicaoCliente">
            <img src={`./img/${props.foto}`} alt="" />
            <p>{props.nome}</p>
            <p>{props.avaliacao01}</p>
            <p>{props.avaliacao02}</p>
        </div>
    )
}