function loadCustomers() {
    var file = "https://wilton-filho.github.io/PFJS-GitHub/Ajax/aplicacao03/json/clientes.json";

    fetch(file)
        .then(response => response.json())
        .then(data => printCustomers(data))
}