import React from 'react';
import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav>
            <Link to="/">Página inicial | </Link>
            <Link to="/faleconosco">Fale conosco</Link>
        </nav>
    );
}

export default Menu;