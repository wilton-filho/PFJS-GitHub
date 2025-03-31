window.addEventListener("DOMContentLoaded", () => {
    var usuarios = [
        {nome:"Ana", idade:18, genero:"F", salario:1000},
        {nome:"João", idade:20, genero:"M", salario:3000},
        {nome:"César", idade:33, genero:"M", salario:1900},
        {nome:"Maria", idade:12, genero:"F", salario:7000},
        {nome:"Zé", idade:17, genero:"M", salario:2400}
    ];

// Exibir o nome e a idade de todas as pessoas maiores de idade
console.log("<<<<Maiores de idade>>>>");
usuarios.filter(usuario => usuario.idade>=18).forEach(usuario => console.log(`${usuario.nome} tem ${usuario.idade} anos`));


// Exibir os nomes de todas as pessoas do sexo masculino
console.log("<<<<Sexo masculino>>>>");
usuarios.filter(usuario => usuario.genero=="M").forEach(usuario => console.log(usuario.nome));

// Exibir os dados da pessoa com o maior salario
console.log("<<<<Maior salario>>>>");
usuarios.filter(usuario => usuario.genero=="M").forEach(usuario => console.log(usuario.nome));

// Há alguma mulher que ganha acima de 5000,00?
// Media dos salarios dos homens e das mulheres
})