function loadCustomers() {
    let xhttp = XMLHttpRequest();
    let file = "../json/clientes.json";

    xhttp.onreadystatechange() = function () {
        if ((this.readyState == 4) && (this.status == 200)) {
            printCustomers(this.responseText);
        }
    }

    xhttp.open("GET", file, true);
    xhttp.send();
}

function printCustomers(clientes) {
    clientes = JSON.parse(clientes);
    console.log(clientes.nome);
    console.log(clientes.idade);
}