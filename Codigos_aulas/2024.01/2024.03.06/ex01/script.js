window.addEventListener("load", function () {
    // console.log("oi");
})

// Tipos de funções

//Funcao declarativa
// function somar(x,y) {
//     return x + y;
// }
// // Arrow Function
// somar = (x,y) => x + y;


// showMsg = msg => console.log(msg);
// showMsg("wilton");


var vet = [11, 22, 37, 40, 58];

// Versão 1
// vet.forEach(exibir);
// Exibe um elemento apenas
// function exibir(x) {
//     console.log(x);
// }

// Exibe todos os elementos do vetor no console
// Versão 2
// vet.forEach(elemento => console.log(elemento));


// Exibe o dobro dos pares e o triplo dos ímpares
// vet.forEach(x => (x % 2 == 0) ? console.log(x * 2) : console.log(x * 3));

// Exibe o indice onde se encontra o elemento do vetor juntamente com o vetor a cada impressao
// vet.forEach((elemento, indice, vetor) => console.log(`[${indice}] - ${elemento}: ${vetor}`));


// Duplica todos os valores do vetor
// Versao 1
// vetNovo = vet.map(dobrar)
// console.log(vetNovo);
// function dobrar(x) {
//     return x * 2;
// }

// Versao 2
// console.log(vet.map(x=>x*2))

// Filtra os elementos >= 18 e exibe no console
// var vet = [10,12,18,20,35];
// novoVet = vet.filter(elemento => elemento>=18);
// console.log(novoVet);

// Todo elemento contido no vetor >= 18 
// console.log(vet.every(elemento => elemento>=18));

// Tem algum elemento >= 18
// console.log(vet.some(elemento => elemento>=18));


vet = [10,20,30,40];

soma = vet.reduce(
    (resultado, valorAtual) => resultado += valorAtual, 100
    );
console.log(soma);

// function somar(resultado, valorAtual) {
//     resultado += valorAtual; // resultado = resultado + valorAtual;
// }

//somar = (resultado, valorAtual) => resultado += valorAtual;