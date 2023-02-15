// Opção 2: A partir da API fetch

function getTxtOp02() {
    fetch('bd.txt')
        .then(response => response.text())
        .then(info => document.getElementById("txtMsg").innerHTML = info + " (Fetch API)")
}