import React from 'react';
import Cliente from './Cliente/Cliente';

function DepoimentosClientes() {

    const depoimentosClientes = [
        {nome:"Wilton Filho", depoimento:"Lorem 11111 ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab culpa hic dolores rem optio rerum laboriosam distinctio, doloremque nemo cupiditate, eaque architecto vitae aspernatur voluptate voluptas a quas in?", urlImg:"img/foto01.jpg"},
        {nome:"Maria José", depoimento:"Lorem 22222 ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab culpa hic dolores rem optio rerum laboriosam distinctio, doloremque nemo cupiditate, eaque architecto vitae aspernatur voluptate voluptas a quas in?", urlImg:"img/foto02.jpg"},
        {nome:"Ana Maria", depoimento:"Lorem 33333 ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab culpa hic dolores rem optio rerum laboriosam distinctio, doloremque nemo cupiditate, eaque architecto vitae aspernatur voluptate voluptas a quas in?", urlImg:"img/foto03.jpg"},
        {nome:"Roberta Santos", depoimento:"Lorem 44444 ipsum dolor sit amet consectetur, adipisicing elit. Officiis ab culpa hic dolores rem optio rerum laboriosam distinctio, doloremque nemo cupiditate, eaque architecto vitae aspernatur voluptate voluptas a quas in?", urlImg:"img/foto04.jpg"}
    ];

    return (
        <div className='container'>
           <Cliente nomeCliente={depoimentosClientes[0].nome} descricao={depoimentosClientes[0].depoimento} urlImg={depoimentosClientes[0].urlImg}/>
           <Cliente nomeCliente={depoimentosClientes[1].nome} descricao={depoimentosClientes[1].depoimento} urlImg={depoimentosClientes[1].urlImg}/>
           <Cliente nomeCliente={depoimentosClientes[2].nome} descricao={depoimentosClientes[2].depoimento} urlImg={depoimentosClientes[2].urlImg}/>
           <Cliente nomeCliente={depoimentosClientes[3].nome} descricao={depoimentosClientes[3].depoimento} urlImg={depoimentosClientes[3].urlImg}/>
        </div>
    );
}

export default DepoimentosClientes;