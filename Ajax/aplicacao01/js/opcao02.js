function getTxtOp02() {
    fetch('bd.txt')
        .then(response => response.text())
        .then(info => document.getElementById("txtMsg").innerHTML = info + " (opção 02)")
}