// Opção 2: A partir da API fetch

function getCustomersOp2() {
    let file = "https://wilton-filho.github.io/PFJS-GitHub/Ajax/aplicacao02/json/clientes.json";
    fetch(file)
        .then(response => response.json())
        .then(data => printCustomers(data))
}