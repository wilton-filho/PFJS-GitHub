// Opção 1: A partir da criação de um objeto XMLHttpRequest

function getTxtOp01() {
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
