export default function Post(props) {
    return (
        <div className="post">
            <h1>{props.titulo}</h1>
            <p>{props.msg}</p>
            <p className="data">Data: {props.data}</p>
        </div>
    );
}