window.addEventListener("load", function () {
    var vet = [1,2,3,4,5];
    imprimir(vet);
});

function imprimir(vet) {
    vet.forEach(x => (x%2==0)?console.log(x*2):console.log(x))
}










function exibaElemento(elemento) {
    console.log(elemento);
}




//var imprimir = (vet) => vet.forEach(elemento=>console.log(elemento));

// function imprimir(vet) {
//     for (var i=0; i<vet.length; i++) {
//         console.log(vet[i])
//     }
// }