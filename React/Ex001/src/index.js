import ReactDOM from 'react-dom';

// Exemplo 01: Hello, World!
ReactDOM.createRoot(document.getElementById("root")).render("Hello, World!",);

// Exemplo 02: Tentativa de aplicar uma tag HTML
// Nao ira aplicar o elemento HTML <h1>, pois será entendido como um texto
// ReactDOM.createRoot(document.getElementById("root")).render("<h1>Hello, World!</h1>");

// Exemplo 03: Renderizando várias vezes o root (ultimo sera aplicado)
// ReactDOM.createRoot(document.getElementById("root")).render("Hello 1!");
// ReactDOM.createRoot(document.getElementById("root")).render("Hello 2!");
