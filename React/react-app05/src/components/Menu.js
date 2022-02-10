import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/sobre">Sobre</Link> |
                <Link to="/faleconosco">Fale conosco</Link>
            </nav>
        );
    }
}

export default Menu;