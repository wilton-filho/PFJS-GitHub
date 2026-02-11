window.addEventListener("DOMContentLoaded", function () {
    
    var btn1 = document.getElementById("btnClicar1");
    var btn2 = document.getElementById("btnClicar2");
    var btn3 = document.getElementById("btnClicar3");

    btn1.addEventListener("click", function () {
        exibirMsg("msg do botao 1");
    });
    btn2.addEventListener("click", function () {
        exibirMsg("msg do botao 2");
    });
    btn3.addEventListener("click", function () {
        somar(10,20);
    });
    function exibirMsg(msg) {
       alert(msg); 
    }
    function somar(x, y) {
        alert(x+y);
    }
})