window.addEventListener("load", function () {
    vetAges = [100, 21, 31, 40];

    // Exercício 01
    document.write(`<p>Soma das idades = ${sumAges(vetAges)}</p>`);

    // Exercício 02 (a)
    document.write(`<p>Média das idades = ${sumAges(vetAges)/vetAges.length}</p>`);

    // Exercício 02 (b)
    document.write(`<p>Maior idade = ${maior(vetAges)}</p>`);

    // Exercício 02 (c)
    document.write(`<p>Idades impares = ${impares(vetAges)}</p>`);

    // Exercício 02 (d)
    document.write(`<p>Todos maiores idade = ${maioresIdade(vetAges)}</p>`);

    // Exercício 02 (e)
    document.write(`<p>Todos maiores do que X = ${maioresIdadeX(vetAges, 25)}</p>`);

});

// Exercício 01
sumAges = vet => {
    var sum = 0;
    for (var i = 0; i < vet.length; i++) sum += vet[i];
    return sum;
}

// Exerício 02 (b)
maior = vet => {
    var max = vet[0];
    for (var i = 1; i < vet.length; i++) if (vet[i]>max) max = vet[i];
    return max;
}

// Exerício 02 (c)
impares = vet => {
    var impares = [];
    for (var i = 0; i < vet.length; i++) if (vet[i]%2) impares.push(vet[i]);
    return impares;
}

// Exerício 02 (d)
maioresIdade = vet => {
    for (var i = 0; i < vet.length; i++) if (vet[i]<18) return false;
    return true;
}

// Exerício 02 (e)
maioresIdadeX = (vet, valor) => {
    for (var i = 0; i < vet.length; i++) if (vet[i]<valor) return false;
    return true;
}

// Exerício 02 (f)
maioresIdadeX = (vet, valor) => {
    for (var i = 0; i < vet.length; i++) if (vet[i]<valor) return false;
    return true;
}

