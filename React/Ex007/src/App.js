import Nome from './components/Nome';


// Opção 1: Chamada do componente "Nome" varias vezes (Wilton Filho irá se repetir). Sem uso de props
const App = () => {
    return (
        <>
            <Nome/>
            <Nome/>
        </>
    );
}

// Opção 2: Chamada do componente "Nome" varias vezes (nome sera trocado) devido o uso de props
/*const App = () => {
    return (
        <>
            <Nome name="Wilton Filho"/>
            <Nome name="Maria José"/>
        </>
    );
}*/

// Opção 3: Chamada do componente "Nome" com vários parâmetros
/*const App = () => {
    return (
        <>
            <Nome name="Wilton" surname="Filho"/>
            <Nome name="Maria" surname="José"/>
        </>
    );
}*/

// Opção 4: Chamada do componente "Nome" com vários parâmetros usando struct do JS no componente
/*const App = () => {
    return (
        <>
            <Nome name="Wilton" surname="Filho" age={41}/>
            <Nome name="Maria" surname="José" age={38}/>
        </>
    );
}*/

// Opção 5: Chamada do componente "Nome" composto por funções
/*const App = () => {
    return (
        <>
            <Nome name="Wilton" surname="Filho"/>
            <Nome name="Maria" surname="José"/>
        </>
    );
}*/

// Opção 6: definição de tipo de dados para props, props obrigatório, props com valor default
// const App = () => {
//     return (
//         <>
//             <Nome name="Wilton"/>
//             {/* A chamada do componente abaixo irá dar erro, pois foi utlizado o tipo string para name */}
//             {/* <Nome name={10}/> */}
//             {/* A chamada do componente abaixo irá dar erro, pois declarado como obrigatório */}
//             {/* <Nome/> */}
//             <Nome/>
//         </>
//     );
// }

export default App;