// Opção 1: usando await
async function getName(filename) {
    controlImg("visivel");
    arquivo = await fetch(filename);
    conteudo = await arquivo.text();
    controlImg("invisivel");
    document.getElementById("name").innerHTML = conteudo;
}

// Opção 2: usando then catch
/*async function getName(filename) {
    controlImg("visivel");
    fetch(filename)
        .then(arquivo => arquivo.text())
        .then(conteudo => document.getElementById("name").innerHTML = conteudo)
        .catch(erro => console.log(erro.message))
    controlImg("invisivel");
}*/

// Funcao para controlar a visibilidade da imagem de carregamento (loading)
function controlImg(visibility) {
    document.getElementById("imgLoad").className = visibility;
}
