function printCustomers(data) {
    let tab = document.getElementById("customersTab");
    let sexType = document.getElementById("sexList");

    //Apagar linhas da tabela primeiro
    clearTable();

    data.clientes.forEach(elemento => {
        if ((elemento.sexo == sexType.value) || (sexType.selectedIndex == 0)) {
            var line = document.createElement("tr");
            var colName = document.createElement("td");
            var colAge = document.createElement("td");
            customerName = document.createTextNode(elemento.nome);
            customerAge = document.createTextNode(elemento.idade);
            colName.appendChild(customerName);
            colAge.appendChild(customerAge);
            line.appendChild(colName);
            line.appendChild(colAge);
            tab.appendChild(line);
        }
    });
}

function clearTable() {
    var tabela = document.getElementById("customersTab");
    while (tabela.rows.length > 1) tabela.deleteRow(1);
}