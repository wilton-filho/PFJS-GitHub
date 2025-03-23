window.addEventListener("DOMContentLoaded", function () {

    // function showMsg() {
    //     alert("Hello, World!");
    // }
    // showMsg();

    // 1) Funcao declarativa
    function somar(x, y) {
        return x + y;
    }
    // var z = somar(10,20);
    console.log(somar(10,20));
    // console.log(z);

    // 2) Função literal
    const s1 = function somar(x, y) {
        return x + y;
    }
    console.log(s1(20,30));

    // 3) Função anonima
    const s2 = function (x, y) {
        return x + y;
    }
    console.log(s2(30,30));

    // 4) Arrow Function
    const s3 = (x, y) => x + y;

    console.log(s3(30,40));

    //Funcao showMsg utilizando ARROW
    const s4 = () => alert("Hello, World - ARROW!");
    s4();

    // Arrow function para exibir num "alert" o valor passado como parâmetro
    const exibir = x => alert(x);

    exibir("Wilton");
    exibir(10);
    exibir("Projeto Front-end Web JavaScript");

    const somaEhPar = (x, y) => ((x+y)%2 == 0);

    console.log(somaEhPar(10,13)); // false
    console.log(somaEhPar(22,46)); // true

    const vet1 = [1, 2, 3, 4];
    const vet2 = [17, 82, 94, 14];


    // Arrow function para calcular a média das idades de um vetor
    const mediaIdades = vet => {
        var soma = 0;

        for(var i=0; i<vet.length; i++)
            soma = soma + vet[i];

        return soma/vet.length;
    }

    console.log(mediaIdades(vet1));
    console.log(mediaIdades(vet2));

    const maiorIdade = vet => {
        var maior = vet[0];
        for(var i=1; i<vet.length; i++)
            if (vet[i] > maior) maior = vet[i];
        return maior;
    }
    console.log(maiorIdade(vet1));
    console.log(maiorIdade(vet2));


})