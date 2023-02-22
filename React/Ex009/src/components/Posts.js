import comentarios from './Comentarios';

const Posts = () => {

    const getComentarios = () => {
        // console.log(comentarios);

        return comentarios.map(comentario => {
            return (
                <li key={comentario.id}>Nome: {comentario.titulo} | Comentário: {comentario.msg} | Data: {comentario.data}</li>
            )
        });
    }

    return (
        <ul>
            {getComentarios()}
        </ul>
    )
}

export default Posts;