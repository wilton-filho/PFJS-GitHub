import React from 'react';
import SecaoChamada from './SecaoChamada';
import SecaoDescricao from './SecaoDescricao';
import SecaoAutoridade from './SecaoAutoridade';
import SecaoProvaSocial from './SecaoProvaSocial';
import SecaoConversao from './SecaoConversao';
import SecaoFAQ from './SecaoFAQ';

function Main() {
    return (
        <main>
            <SecaoChamada/>
            <SecaoDescricao/>
            <SecaoAutoridade/>
            <SecaoProvaSocial/>
            <SecaoConversao/>
            <SecaoFAQ/>
        </main>
    );
}

export default Main;