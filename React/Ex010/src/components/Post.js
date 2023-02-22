export default function Post(props) {

    function getCorpoPost() {
        return (
            <>
                <h1>{props.titulo}</h1>
                <p>{props.msg}</p>
                <p className="data">Data: {props.data}</p>
            </>
        );
    }

    return (
        <>
            {
                props.autor === "admin" ?
                    <div className="post admin">
                        {getCorpoPost()}
                    </div>
                    :
                    <div className="post">
                        {getCorpoPost()}
                    </div>
            }
        </>
    );
}