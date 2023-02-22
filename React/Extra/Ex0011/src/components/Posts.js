import comentarios from './Comentarios';

const Posts = () => {

    const getComentarios = () => {
        // console.log(comentarios);

        return comentarios.map(comentario => {
            return (
                <div className="post">
                    <h1>{comentario.titulo}</h1>
                    <p>{comentario.msg}</p>
                    <p>{comentario.data}</p>
                </div>
            )
        });
    }

    return (
        <div>
            {getComentarios()}
        </div>
    )
}

export default Posts;