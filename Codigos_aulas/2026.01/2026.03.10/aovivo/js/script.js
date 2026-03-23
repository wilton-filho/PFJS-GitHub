window.addEventListener("DOMContentLoaded", () => {
    // lerArquivoTxt();
    lerArquivoJSON2();
})

// const lerArquivoTxt = () => {
//    const url = "https://wilton-filho.github.io/PFJS-GitHub/APIs/filmes/filmes.txt";
//    fetch(url)
//         .then(resposta => resposta.text())
//         .then(texto => console.log(texto))
// }

// const lerArquivoJSON = () => {
//    const url = "https://wilton-filho.github.io/PFJS-GitHub/APIs/filmes/filmes.json";
//    fetch(url)
//         .then(resposta => resposta.json())
//         .then(filmes => exibirFilmes(filmes))
// }

const lerArquivoJSON2 = async () => {
    const url = "https://wilton-filho.github.io/PFJS-GitHub/APIs/filmes/filmes.json";
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) throw new Error("Exception error!")
        const filmes = await resposta.json();
        exibirFilmes(filmes);
    }
    catch(error) {
        console.log(error.message);
    }
}

const exibirFilmes = (filmes) => {
    filmes.forEach(filme => 
        console.log(`${filme.nome} ${filme.imdb} ${filme.genero}`
    ));
}



