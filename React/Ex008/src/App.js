import Post from './components/Post';
import comentarios from './js/comentarios.js';

export default function App() {

  // O codigo abaixo exibe 3 componentes, ou seja, pode-se utilizar um vetor para armazenar os componentes que se deseja renderizar
  // const components = [<Post/>, <Post/>, <Post/>];
  // return (
  //   <>
  //     {components}
  //   </>
  // );

  // Retorna <Post/> a serem renderizados
  return (
    <>
      {getPosts()} 
    </>
  );

  // Retorna um vetor de <Post/>
  function getPosts() {
    return comentarios.map((comentario, index) => 
        <Post key={index} titulo={comentario.titulo} data={comentario.data} msg={comentario.msg} />)
  }
}