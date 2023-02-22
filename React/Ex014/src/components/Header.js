import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/servicos">Serviços</Link> | 
                <Link to="/contatos">Contatos</Link>
            </nav>
            <h1>Cabeçalho da página</h1>
        </header>
    );
}