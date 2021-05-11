// Exemplo 05: Hello World! usando Promise com async e await (Refatorando o Exemplo 02)

$(document).ready(function() {
    $("#btnView").click(function() {
        add();
    })
});

async function add() {
    var $p1 = new Promise(function(resolve) {
        var a = b = 10;
        //var a = "x"; b = 10;
        (!isNaN(a) && !isNaN(b))?resolve(a+b):resolve('Erro!!!');
    });
    $msg = await $p1;
    console.log($msg);
}