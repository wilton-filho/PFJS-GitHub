import React from 'react';
// O import acima pode ser suprimido. Isso ocorreu a partir da versão 17 do React (Motivo: a conversão de código usando 
// a notação JSX para JS regular é feita pelo JSX Transform ao realizar create-react-app)
// Fonte: https://pt-br.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html


// Há duas abordagens para criação de um componente: "function component" ou "class component"
// Utilizarei apenas a abordagem de "function component" (sugestão da documentação do REACT)
// A notação JSX será utilizada para criação dos elementos

// Perceba que o export default foi colocado aqui (ao invés do final)
export default function App() {
    return (
        <h1>Hello, World!</h1>
    );
}

// A notacao arrow function tb poderia ser utilizada para definição de um componente
/* export default const App = () =>  {
    return (
        <h1>Hello, World!!!</h1>
    );
}*/

// Exemplo 3: Necessidade de uma tag pai para encapsular filhos
/*export default function App() {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>Lorem ipsum dolor sit amet, consectet</p>
        </div>
    );
}*/

// Exemplo 4: Pai com tag vazia
/*export default function App() {
    return (
        <>
            <h1>Hello, World!</h1>
            <p>Lorem ipsum dolor sit amet, consectet</p>
        </>
    );
}*/

