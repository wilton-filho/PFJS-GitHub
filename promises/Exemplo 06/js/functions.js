// Exemplo 06: Faz a requisição de um arquivo de texto do servidor e exibe o conteudo dele num textarea do cliente

// Opção 1: Sem utilizar async e await
/*function showTxtFile(filename) {
    fetch(filename).then(file => file.text()).then(conteudo => document.getElementById("txtFile").innerHTML = conteudo)
    // ou
    //fetch(filename)
    //    .then(file => file.text()).
    //    then(conteudo => document.getElementById("txtFile").innerHTML = conteudo)
}*/

// Opção 2: Utilizando async e await

$(document).ready(function() {
  $("#btnOpenFile").click(function() {
    async function showTxtFile(filename) {
      var file = await fetch(filename);
      var contents = await file.text();
      document.getElementById("txtFile").innerHTML = contents;
    }
    showTxtFile("text.txt");
  });
});