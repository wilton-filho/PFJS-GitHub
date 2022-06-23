import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/style.css';

class SobreNos extends Component {
    render() {
        return (
            <main className="mainSobreNos"> 
                <h1>Sobre nós</h1>
                <p>Clique <Link to="/contatos">aqui</Link> para abrir a página CONTATOS</p>
            </main>
        );
    }
}

export default SobreNos;