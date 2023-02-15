// Opção 1: A partir da criação de um objeto XMLHttpRequest

function getCustomersOp1() {
    let xhttp = new XMLHttpRequest();
    let file = "https://wilton-filho.github.io/PFJS-GitHub/Ajax/aplicacao02/json/clientes.json";

    xhttp.onreadystatechange = function () {
        if ((this.readyState == 4) && (this.status == 200)) {
            printCustomers(JSON.parse(this.responseText));
        }
    }

    xhttp.open("GET", file, true);
    xhttp.send();
}