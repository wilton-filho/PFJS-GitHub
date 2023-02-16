import Titulo from './Titulo';
import Mensagem from './Mensagem';
import Data from './DataPublicacao';

const Post = (props) => {
    return (
        <div className="post">
            <Titulo title={props.title}/>
            <Mensagem/>
            <Data date={props.date}/>
        </div>
    );
}

export default Post;