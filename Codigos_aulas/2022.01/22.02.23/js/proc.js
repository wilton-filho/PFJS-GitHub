workers = {
    data:[
        {name:"José da Silva",age:"20",sex:"M",salary:2500},
        {name:"Ana Maria",age:"33",sex:"F",salary:7500},
        {name:"Pedro Alcântara",age:"22",sex:"M",salary:1500},
        {name:"Maria da Silva",age:"55",sex:"F",salary:7500},
        {name:"Antônio Carlos",age:"45",sex:"M",salary:1000}
    ]
}

function main() {
    showWorkers();
    averageSalary();
    salariesAbove3k();
}

//Exibir as informações de todos os trabalhadores (Sugestão: utilizar uma tabela para essa finalidade)
function showWorkers() {
    document.write("<h2>Dados dos funcionários</h2><hr>");
    workers.data.forEach(worker => document.write(`<p>Nome: ${worker.name}; Idade: ${worker.age}; Sexo: ${worker.sex}; Salário: ${worker.salary}</p>`));
}

//Média salarial dos trabalhadores;
function averageSalary() {
    document.write("<h2>Média salarial</h2><hr>");
    averageSalary = workers.data.reduce(((sum, worker) => sum + parseInt(worker.salary)),0)/workers.data.length;
    document.write(`Média salarial: R$${averageSalary}`);
}

//Média salarial dos trabalhadores;
function salariesAbove3k() {
    document.write("<h2>Salários acima de R$3.000,00</h2><hr>");
    salariesAbove = workers.data.filter(worker => worker.salary >= 3000);
    salariesAbove.forEach(worker => document.write(`<p>Nome: ${worker.name}; Idade: ${worker.age}; Sexo: ${worker.sex}; Salário: ${worker.salary}</p>`));
}
