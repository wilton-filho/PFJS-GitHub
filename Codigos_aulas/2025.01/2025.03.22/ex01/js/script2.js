window.addEventListener("DOMContentLoaded", function () {
    var vet = [11, 20, 33, 40, 99];

    // vet.forEach(elemento => console.log(elemento));

    // const imprimir = (elemento) => {
    //     console.log(elemento);
    // }
    

    // const dobrar = (elemento) => {
    //     console.log(elemento*2);
    // }

    // vet.forEach(imprimir);
    // vet.forEach(dobrar);

    

    // const imprimirVet = (vet) => {
    //     for(var i=0; i<vet.length; i++)
    //         imprimir(vet[i]);
    // }

    // const imprimir = (elemento) => {
    //     console.log(elemento);
    // }

    // imprimirVet(vet);

    vet.forEach(x => (x%2==0)?console.log("Par"):console.log("Impar"));

    // parImpar(10);
    // parImpar(11);

})