import Post from './components/Post';
import comentarios from './js/comentarios.js';

export default function App() {

  return (
    <>
      {getPosts()} 
    </>
  );

  function getPosts() {
    return comentarios.map((comentario, index) => 
        <Post key={index} titulo={comentario.titulo} data={comentario.data} msg={comentario.msg} autor={comentario.autor}/>)
  }
}