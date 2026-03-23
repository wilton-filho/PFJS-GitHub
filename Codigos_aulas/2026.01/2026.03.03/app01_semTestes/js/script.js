window.addEventListener("DOMContentLoaded", () => {
    openFileOp01();
    openFileOp02();
})

// Sem realização de testes

// Primeira opção: usando fetch
const openFileOp01 = () => {
    const url = "https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json";
    fetch(url)
        .then(resposta => resposta.json())
        .then(usuarios => showUsers(usuarios))
}

// Segunda opção: usando async
const openFileOp02 = async () => {
    const url = "https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json";
    const resposta = await fetch(url);
    const usuarios = await resposta.json();
    showUsers(usuarios);
}

const showUsers = (usuarios) => {
    usuarios.forEach(usuarios => {
        console.log(usuarios.nome);
    });
}