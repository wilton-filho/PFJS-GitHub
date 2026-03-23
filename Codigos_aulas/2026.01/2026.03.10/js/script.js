window.addEventListener("DOMContentLoaded", () => {
    openFileOp01();
    openFileOp02();
})

const openFileOp01 = () => {
    const url = "https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json";

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("erro na requisição");
            return response.json()
        })
        .then(dados => mostrarUsuarios(dados))
        .catch(error => console.log(error.message));
}

const openFileOp02 = async () => {
    const url = "https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json";

    try {
        const resposta = await fetch(url);
        if (!resposta.ok) throw new Error("erro na requisição");
        const dados = await resposta.json();
        mostrarUsuarios(dados);
    }
    catch (error) {
        console.log(error.message);
    }
}

const mostrarUsuarios = (alunos) => {
    const lista = document.getElementById("lista-alunos");

    // O .map() cria um novo array de strings HTML
    // O .join("") transforma esse array em uma única string gigante
    lista.innerHTML = alunos.map(aluno => `
        <li>
            <strong>Nome:</strong> ${aluno.nome} <br>
            <span>Nota 1: ${aluno.notaBim1}</span> <br>
            <span>Nota 2: ${aluno.notaBim2}</span> <br>
            <span>Nota total: ${aluno.notaBim1 + aluno.notaBim2}</span>
        </li>
        <hr>
    `).join("");
}