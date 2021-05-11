// Exemplo 01: Hello World! usando Promise apenas com resolve() e then

//1ª Opção: Usando Callback (sem passagem de parâmetro)
$(document).ready(function() {
    $("#btnView").click(function() {
        console.log("Hello World!");
        resolve('Fim');
    });
});
function resolve($msg) {
    console.log($msg);
}

//2ª Opção: Usando Promise (sem passagem de parâmetro)
/*$(document).ready(function() {
    $("#btnView").click(function() {
        var $p = new Promise(function(resolve){
            console.log("Hello World!");
            resolve();
        });
        $p.then(() => {
            console.log("Fim!");
        });
    })
});*/

//2ª Opção: Usando Promise (com passagem de parâmetro)
/*$(document).ready(function() {
    $("#btnView").click(function() {
        var $p = new Promise(function(resolve){
            console.log("Hello World!");
            resolve('Fim');
        });
        $p.then(($msg) => {
            console.log($msg);
        });
    })
});*/