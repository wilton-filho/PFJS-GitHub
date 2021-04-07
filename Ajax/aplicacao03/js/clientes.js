function loadCustomers(sexList, customersTab) {
    var file = "https://wilton-filho.github.io/PFJS-GitHub/Ajax/aplicacao03/json/clientes.json";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.status == 200 && xhttp.readyState == 4) 
            loadInfoCustomers(xhttp, sexList, customersTab);
    }
    xhttp.open("GET", file, true);
    xhttp.send();
}
function loadInfoCustomers(xhttp, sexList, customersTab) {
    let tab = document.getElementById(customersTab);
    let sexType = document.getElementById(sexList);

    registro = JSON.parse(xhttp.responseText);

    registro.clientes.forEach(elemento => {
        if ((elemento.sexo == sexType.value) || (sexType.index == 0)) {
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