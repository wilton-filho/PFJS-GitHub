import Titulo from './Titulo';
import Mensagem from './Mensagem';
import Data from './DataPublicacao';

export default function Post() {
    return (
        <div className="post">
            <Titulo/>
            <Mensagem/>
            <Data/>
        </div>
    );
}