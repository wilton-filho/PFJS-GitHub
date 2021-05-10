$(document).ready(function() {
    // Tela de LOGIN
    $("#btnLogin").click(function() {
        let $user = $("#user").val();
        let $pwd = $("#pwd").val() ;

        if ($user && $pwd) {
            $.getJSON("json/users.json", function(registros){
                if (registros.usuarios.filter(usuario => (usuario.user == $user && usuario.pwd == $pwd)).length>0)
                    window.open("jogo.html","_self");
                else alertWifi("Que pena! Seu usuário é inválido!",false,0,"img/morreu.gif","30");
            });
        }
        else alertWifi("Psiu! Informe o usuário e a senha.",false,0,"img/buraco.gif","30");
    });

    // Tela de CADASTRO
    $("#btnNewUser").click(function() {
        let $user = $("#user").val();
        let $pwd = $("#pwd").val() ;
    
        if ($user && $pwd) {
            $.getJSON("json/users.json", function(registros){
                if (registros.usuarios.filter(usuario => (usuario.user == $user && usuario.pwd == $pwd)).length>0)
                    alertWifi("Ixi, esse usuário já existe. Tente outro!",false,0,"img/morreu.gif","30");    
                else {
                    let postagem = $.post("php/file.php", $("form").serialize());
                    $("#user").prop("disabled", true);
                    $("#pwd").prop("disabled", true);
                    postagem.done(function(resposta){
                        $("#user").val("");
                        $("#pwd").val("");
                        alertWifi(resposta, false, 0, "img/toupeira.gif","30");    
                    });
                    postagem.fail(function(jqXHR, textStatus, error){
                        alertWifi(`Erro: ${textStatus}, ${error}`,false,0,"img/morreu.gif","30");    
                    });
                    postagem.always(function(){
                        $("#user").prop("disabled", false);
                        $("#pwd").prop("disabled", false);
                    });
                }
            });
        }
        else alertWifi("Psiu! Informe o usuário e a senha.",false,0,"img/buraco.gif","30");
    });
});


