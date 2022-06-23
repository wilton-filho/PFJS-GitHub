import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/sobrenos">Sobre nós</Link> |
                <Link to="/contatos">Contatos</Link>
            </nav>
        );
    }
}

export default Menu;