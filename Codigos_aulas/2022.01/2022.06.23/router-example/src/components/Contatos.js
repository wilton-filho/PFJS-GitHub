import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/style.css';

class Contatos extends Component {
    render() {
        return (
            <main className="mainContatos"> 
                <h1>Contatos</h1>
                <p>Clique <Link to="/sobrenos">aqui</Link> para abrir a página SOBRE NÓS</p>
            </main>

        );
    }
}

export default Contatos;