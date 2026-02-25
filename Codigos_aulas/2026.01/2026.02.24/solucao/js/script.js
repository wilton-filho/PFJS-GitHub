import usuarios from './usuarios.js';

window.addEventListener("DOMContentLoaded", () => {
    maiorIdade(18);
    exibeSexo("M");
    maiorSalario();
    todosSalariosSexo(1000, "M");
    mediaSalarios("F");
    mediaSalarios("M");
})

const maiorIdade = (idade) => {
    console.log("\nMaiores de idade:\n\n");
    usuarios.forEach(usuario => {if (usuario.idade >= idade) console.log(`${usuario.nome} tem ${usuario.idade} anos`)});
}

const exibeSexo = (sexo) => {
    console.log(`\nPessoas do sexo ${sexo}:\n\n`);
    usuarios.forEach(usuario => {if (usuario.sexo >= sexo) console.log(`${usuario.nome}`)});
}

const maiorSalario = () => {
    console.log(`\nPessoa com o maior salário:\n\n`);
    const userMaior = usuarios.reduce((maior, usuario) => (usuario.salario > maior.salario)? usuario : maior)
    console.log(`${userMaior.nome} tem ${userMaior.idade} anos e possui o maior salário = R$${userMaior.salario},00`);
}

const todosSalariosSexo = (salario, sexo) => {
    const users = usuarios.some(usuario => usuario.sexo == sexo && usuario.salario >= salario)
    // const users = usuarios.filter(usuario => usuario.sexo == sexo && usuario.salario >= salario)
    console.log(`\nTem alguma pessoa do sexo ${sexo} que ganha acima de R$${salario},00?\n\n`);
    console.log(users?"Sim":"Não");
}

const mediaSalarios = (sexo) => {
    let userSexo, somaSalarios;
    userSexo = usuarios.filter(usuario => usuario.sexo === sexo);
    if (userSexo.length == 0) return 0;
    somaSalarios = userSexo.reduce((total, usuario) => {return total + usuario.salario}, 0);
    console.log(`Média dos salários do sexo ${sexo} = R$${(somaSalarios/userSexo.length).toFixed(2)}`);
}