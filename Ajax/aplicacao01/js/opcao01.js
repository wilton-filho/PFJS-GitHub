// Opção 1: Criação de um objeto XMLHttpRequest (o XMLHttpRequest é o objeto central que permite a comunicação entre a página web e o servidor)

function getTxt() {
    let xhttp = new XMLHttpRequest();
    let file = "bd.txt";
    xhttp.onreadystatechange = function () {
        if ((xhttp.readyState == 4) && (xhttp.status == 200)) {
            document.getElementById("txtMsg").innerHTML = xhttp.responseText + " (opção 01)";
        }
    }
    xhttp.open("GET", file, true);
    xhttp.send();
}
