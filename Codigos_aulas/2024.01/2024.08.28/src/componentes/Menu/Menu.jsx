import React from 'react';
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

function Menu() {
	return (
		<nav>
			<ul>
				<li><Link to="/">Página inicial</Link></li>
				<li><Link to="/contato">Contato</Link></li>
				<li><Link to="/sobrenos">Sobre nós</Link></li>
			</ul>
		</nav>
	);
}

export default Menu;