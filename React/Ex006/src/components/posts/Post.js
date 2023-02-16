import Titulo from './Titulo';
import Mensagem from './Mensagem';
import Data from './DataPublicacao';

const Post = () => {
    return (
        <div className="post">
            <Titulo/>
            <Mensagem/>
            <Data/>
        </div>
    );
}

export default Post;