// Essa importação não é mais necessária a partir da versão 17 do React (Motivo: a conversão de código usando 
// a notação JSX para JS regular é feita pelo JSX Transform ao realizar create-react-app)
// Fonte: https://pt-br.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
import React from 'react';

// Há duas abordagens para criação de um componente: "function component" ou "class component"
// Será utilizada a opção de "function component"
// Além disso, está sendo utilizada a notação JSX para criação de um component

// Exemplo 1: usando funcao declarativa para definição de um componente
function App() {
    return (
        <h1>Hello, World!</h1>
    );
}

// Exemplo 2: usando notacao arrow function para definição de um componente
/*const App = () =>  {
    return (
        <h1>Hello, World!!!</h1>
    );
}*/

// Exemplo 3: Necessidade de uma tag pai para encapsular filhos
/*const App = () =>  {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>Lorem ipsum dolor sit amet, consectet</p>
        </div>
    );
}*/

// Exemplo 4: Pai com tag vazia
/*const App = () =>  {
    return (
        <>
            <h1>Hello, World!</h1>
            <p>Lorem ipsum dolor sit amet, consectet</p>
        </>
    );
}*/

export default App;