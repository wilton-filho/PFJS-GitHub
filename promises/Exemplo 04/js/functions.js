// Exemplo 04: Espera um timer finalizar para exibir um texto na página usando Promise e async

// 1ª Opção: Usando Callback
/*$(document).ready(function() {
    $("#btnView").click(function() {
        setTimeout(function() {
            $("body").append($("<p>Fim do timer!</p>"));
            showMsg("Sucesso");
        }, 2000);
    })
});
function showMsg($msg) {
    $("body").append($("<p></p>").text(`Felizmente - ${$msg}`));
}*/

// 2ª Opção: Usando Promise
$(document).ready(function() {
    $("#btnView").click(function() {
        let $promise = new Promise(function(resolve, reject){
            //setTimeout(funcao, 1000, param1, param2, ...);
            setTimeout(function() {
                $("body").append($("<p>Fim do timer!</p>"));
                resolve('SUCESSO!');
                reject('ERRO');
            }, 2000);
            
        });
        $promise.then(($msg) => {
            $("body").append($("<p></p>").text(`Felizmente - ${$msg}`));
        }).catch(($err) => {
            $("body").append($("<p></p>").text(`Infelizmente - ${$err}`));
        });
    })
});