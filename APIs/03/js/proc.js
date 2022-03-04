
// Le os usuarios armazenados num arquivo JSON
async function readUsers(file) {
    let arquivo = await fetch(file);
    let tab = await arquivo.json();
    showUsers(tab);
}

// Exibe os usuarios lidos de um arquivo JSON numa tabela
function showUsers(tab) {
    tab.users.forEach(user => {
        tabela = document.getElementById("tabUsers");
        tr = document.createElement("tr");

        nome = document.createTextNode(user.name);
        tdNome = document.createElement("td");
        tdNome.appendChild(nome);

        sexo = document.createTextNode(user.level);
        tdSexo = document.createElement("td");
        tdSexo.appendChild(sexo);

        idade = document.createTextNode(user.score);
        tdIdade = document.createElement("td");
        tdIdade.appendChild(idade);

        tr.appendChild(tdNome);
        tr.appendChild(tdSexo);
        tr.appendChild(tdIdade);
        tabela.appendChild(tr);
    });
}