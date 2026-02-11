window.addEventListener("DOMContentLoaded", function () {
    // Função declarativa
    // function somar(x, y) {
    //     alert(x+y);
    // }
    // somar(10,20);
    // somar(30,50);

    // Função literal
    // const sum = function somar(x, y) {
    //     alert(x+y);
    // }
    // sum(20,22);

    // Função anônima
    // const sum2 = function (x, y) {
    //     alert(x+y);
    // }
    // sum2(23,22);

    // Arrow Function
    // const sum2 = (x, y) => {
    //     alert(x+y);
    // }
    // sum2(33,22);

    const exibirMsg = msg => alert(msg);

    // exibirMsg("Wilton");

    const exibirNro = (nro) => {
        alert(nro);
    }
    
    const dobroTriplo = x => {
        alert(x * 2);
        alert(x * 3);
    }
    // dobroTriplo(4);

    const dobroNro = x => x * 2;
    // alert(dobroNro(4));




    const somarIdades = (vet) => {
        var acumulador = 0;
        for (let i=0; i<vet.length; i++) {
            acumulador = acumulador + vet[i];
        }
        return acumulador;

    }

    

    var vetorIdades = [1, 2, 4 ,7, 4];
    var soma = somarIdades(vetorIdades);
    alert(soma);

    
})