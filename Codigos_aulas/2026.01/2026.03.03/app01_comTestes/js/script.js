window.addEventListener("DOMContentLoaded", () => {
    openFile();
})

const openFile = async () => {
    const url = "https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json";
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Errow(`Erro: ${resposta.status} - ${resposta.statusText}`);
        }
        const usuarios = await resposta.json();
        showUsers(usuarios);
    }
    // Captura qualquer erro (de erro ou throw)
    catch (error) {
        console.log(`Falha ao buscar usuarios: ${error.message}`);
    }
}
// Status,StatusText,O que significa na prática?
// 200,OK,O arquivo JSON foi lido com sucesso.
// 404,Not Found,Você errou o caminho ou o nome do arquivo no GitHub.
// 403,Forbidden,O repositório pode estar privado ou há bloqueio de acesso.
// 500,Internal Server Error,O GitHub (ou o servidor de hospedagem) está com problemas internos.

const showUsers = (usuarios) => {
    usuarios.forEach(usuarios => {
        console.log(usuarios.nome);
    });
}