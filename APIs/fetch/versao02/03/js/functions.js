// Opção 1: usando await
async function getClients(filename) {
    controlImg("visivel");
    arquivo = await fetch(filename);
    conteudo = await arquivo.json();
    controlImg("invisivel");
    tabela = document.getElementById("tabClients");
    conteudo.users.forEach(client => {
        linha = document.createElement("tr");
        // "for" para percorrer todos os atributos do objeto client (name e age)
        for (item in client) {
            coluna = document.createElement("td");
            coluna.innerHTML = client[item];
            linha.appendChild(coluna);
        }
        linha.appendChild(coluna);
        this.tabela.appendChild(linha);
    });
}

// Opção 2: usando then catch
/*async function getClients(filename) {
    controlImg("visivel");
    fetch(filename)
        .then(arquivo => arquivo.json())
        .then(conteudo => {
            tabela = document.getElementById("tabClients");
            conteudo.users.forEach(client => {
                linha = document.createElement("tr");
                // "for" para percorrer todos os atributos do objeto client (name e age)
                for (item in client) {
                    coluna = document.createElement("td");
                    coluna.innerHTML = client[item];
                    linha.appendChild(coluna);
                }
                linha.appendChild(coluna);
                this.tabela.appendChild(linha);
            });
        })
        .catch(erro => console.log(erro.message))
    controlImg("invisivel");
}*/

// Funcao para controlar a visibilidade da imagem de carregamento (loading)
function controlImg(visibility) {
    document.getElementById("imgLoad").className = visibility;
}
