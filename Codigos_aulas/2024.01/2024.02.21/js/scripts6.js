window.addEventListener("load", function () {
    var vet = [1,2,3,4,5];
    mostraPar(vet);
    mostraImpar(vet);
});

// Versão simplificada
mostraPar = vet => {vet.forEach(elemento => {if (elemento%2==0) console.log(elemento)})};
mostraImpar = vet => {vet.forEach(elemento => {if (elemento%2) console.log(elemento)})};

//Versão com o passo a passo
// function mostraPar(vet) {
//     vet.forEach(ehPar)
// }

// function ehPar(elemento) {
//     if (elemento%2==0) console.log(elemento);
// }













// mostraPar = vet => vet.forEach(elemento => {if(elemento%2==0)console.log(elemento)});
// mostraImPar = vet => vet.forEach(elemento => {if(elemento%2)console.log(elemento)});