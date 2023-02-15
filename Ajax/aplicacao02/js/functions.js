function printCustomers(clientes) {
    let tabela = document.getElementById("tabCustomers");
    let trCliente = document.createElement("tr");
    let tdNome = document.createElement("td");
    let tdIdade = document.createElement("td");

    clientes = JSON.parse(clientes);
  
    nome = document.createTextNode(clientes.nome);
    idade = document.createTextNode(clientes.idade);
    tdNome.appendChild(nome);
    tdIdade.appendChild(idade);
    trCliente.appendChild(tdNome);
    trCliente.appendChild(tdIdade);
    tabela.appendChild(trCliente);
}