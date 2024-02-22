window.addEventListener("load", function () {
    // console.log(somar(10,20));
    // console.log(somar(30,40));
    // console.log(s(30,40));
    // console.log(s2(30,30));
    console.log(soma(40,40));
});

// 1º Maneira de se escrever a função somar: "Função Declarativa"
// function somar(x, y) {
//     return x + y;
// }

// 2º Maneira de se escrever a função somar: "Função Literal"
var s = function somar(x, y) {
    return x + y;
}

// 3º Maneira de se escrever a função somar: "Função anônima"
var s2 = function (x, y) {
    return x + y;
}

// 4º Maneira de se escrever a função somar: "Arrow Function"
// var soma = (x, y) => {
//     return x + y;
// }
// Maneira mais simplificada de se escrever a função acima
var soma = (x, y) => x + y;

