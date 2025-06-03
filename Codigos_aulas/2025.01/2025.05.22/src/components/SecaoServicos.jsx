import React from 'react';
import Apresentacao from './Apresentacao';
import Box1 from './Box1';

function SecaoServicos() {
    return (
        <section>
            <Apresentacao titulo="Serviços e Informações" subtitulo="Selecione o assunto desejado"/>
            <Box1 texto="Eleições do Conselho Superior"/>
            <Box1 texto="Cursos Superiores"/>
        </section>
    );
}

export default SecaoServicos;