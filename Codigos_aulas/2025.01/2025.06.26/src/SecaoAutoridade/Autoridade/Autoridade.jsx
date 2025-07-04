import React from 'react';
import style from './Autoridade.module.css';

function Autoridade({imagem, texto}) {
    return (
        <div className={style.autoridade}>
            <div>
                <h2>Quem sou eu?</h2>
            </div>
            <div>
                <p>{texto}</p>
                <img src={imagem} alt="" />
            </div>
        </div>
    );
}

export default Autoridade;