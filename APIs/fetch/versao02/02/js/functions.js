// Opção 1: usando await
async function getClient(filename) {
    controlImg("visivel");
    arquivo = await fetch(filename);
    conteudo = await arquivo.json();
    controlImg("invisivel");
    document.getElementById("name").innerHTML = conteudo.name;
    document.getElementById("age").innerHTML = conteudo.age;
}

// Opção 2: usando then catch
/*async function getClient(filename) {
    controlImg("visivel");
    fetch(filename)
        .then(arquivo => arquivo.json())
        .then(conteudo => {
            document.getElementById("name").innerHTML = conteudo.name;
            document.getElementById("age").innerHTML = conteudo.age;
        })
        .catch(erro => console.log(erro.message))
    controlImg("invisivel");
}*/

// Funcao para controlar a visibilidade da imagem de carregamento (loading)
function controlImg(visibility) {
    document.getElementById("imgLoad").className = visibility;
}
