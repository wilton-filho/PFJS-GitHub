import React, { Component } from 'react';
import '../assets/styles/styles.css';

import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to="/" className="menu">Home</Link></li>
                        <li><Link to="/portfolio" className="menu">Portfolio</Link></li>
                        <li><Link to="/sobre" className="menu">Sobre</Link></li>
                        <li><Link to="/faleconosco" className="menu">Fale conosco</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;