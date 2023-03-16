function getTextServer() {
    //var filename = "bd.txt";
    var filename = "user.json";
    fetch(filename)
    // As duas instruções comentadas abaixo serão utilizadas com o filename ="bd.txt"
    //.then(response => response.text())
    //.then(dados => document.getElementById("textServer").innerHTML = dados)
    .then(response => response.json())
    .then(dados => document.getElementById("textServer").innerHTML = `${dados.usuario} tem ${dados.idade} anos`)
    .catch(error => console.log(error))
}