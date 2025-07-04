import React from 'react';
import style from './Cliente.module.css';

function Cliente({urlImg, nomeCliente, descricao}) {
    return (
        <div class={style.boxCliente}>
            <img src={urlImg} alt="" />
            <p>{nomeCliente}</p>
            <p>{descricao}</p>
        </div>
    );
}

export default Cliente;