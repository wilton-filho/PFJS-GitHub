function getCustomersOp1() {
    let xhttp = new XMLHttpRequest();
    let file = "https://wilton-filho.github.io/PFJS-GitHub/Ajax/aplicacao02/json/clientes.json";

    xhttp.onreadystatechange = function () {
        if ((this.readyState == 4) && (this.status == 200)) {
            printCustomers(this.responseText);
        }
    }

    xhttp.open("GET", file, true);
    xhttp.send();
}