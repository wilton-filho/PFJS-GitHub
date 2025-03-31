window.addEventListener("DOMContentLoaded", () => {

    // EXERCICIO 01: construir uma arrow function que receba dois parâmetros. Ela deverá retornar o maior valor. Use o operador ternário.
    const maiorValor = (a, b) => (a > b) ? a : b;

    console.log(maiorValor(10,20));
    console.log(maiorValor(101,2));

    const vet = [10, 5, 78, 21, 33];
    const ref = 20;
    // EXERCICIO 02: Crie uma ARROW FUNCTION que dado um VET e um VALOR, retorna um vetor contendo todos os valores do vetor maiores ou igual a VALOR. Em seguida, exiba todos os valores encontrados no console, utilizando forEach.
    const maioresRef = (vet, ref) => {
        var vetMaiores = [];
        for (var i=0; i<vet.length; i++) 
            if (vet[i] >= ref) vetMaiores.push(vet[i])
        return vetMaiores;
    }

    const imprimirVet = (vet) => {
        vet.forEach((elemento, i, vet) => console.log(`${i} =  ${elemento}: ${vet}`));
    }

    imprimirVet(maioresRef(vet, ref));

    console.log(vet.map(elemento => elemento *2));

    // em relação a const vet = [10, 5, 78, 21, 33]; exiba todos os elementos maiores ou iguais a 15
    console.log(vet.filter(elemento => elemento >= 15))
    console.log(vet.every(elemento => elemento >= 15))
    console.log(vet.some(elemento => elemento >= 15))

    // forEach, map, filter, every, some
    var vet2 = [10,20,30];
    console.log(vet2.reduce((soma,elemento) => soma += elemento, 0));



})