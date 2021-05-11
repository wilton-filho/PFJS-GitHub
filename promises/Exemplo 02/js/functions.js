// Exemplo 02: Adicionar 2 numeros usando callback
/*$(document).ready(function() {
    $("#btnView").click(function() {
        add();
    })
});
function add() {
    var a = b = 10;
    (!isNaN(a) && !isNaN(b))?resolve(a+b):reject('Erro');
}
function resolve(res){
    console.log(res);
}
function reject(err){
    console.log(err);
}*/

// Exemplo 02: Adicionar 2 numeros usando Promise
$(document).ready(function() {
    $("#btnView").click(function() {
        var $p = new Promise(function(resolve, reject){
            //var a = b = 10;
            var a = "wilton"; b = 10;
            (!isNaN(a) && !isNaN(b))?resolve(a+b):reject('Erro');
        });
        $p
         .then(function(res){console.log(res);})
         .catch(function(err){console.log(err);})
    })
});