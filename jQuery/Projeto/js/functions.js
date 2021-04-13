$(document).ready(function() {

    // Tela de LOGIN
    $("#btnLogin").click(function() {
        let $user = $("#user").val();
        let $pwd = $("#pwd").val() ;

        if ($user && $pwd) {
            $.getJSON("json/users.json", function(registros){
                if (registros.usuarios.filter(usuario => (usuario.user == $user && usuario.pwd == $pwd)).length>0)
                    window.open("jogo.html","_self");
                else alert("Usuário inexistente");
            });
        }
        else alert("ERRO: Usuário e senha são necessários para logar");
    });

    // Tela de CADASTRO
    $("#btnNewUser").click(function() {
        let $user = $("#user").val();
        let $pwd = $("#pwd").val() ;

        if ($user && $pwd) {
            $.getJSON("json/users.json", function(registros){
                if (registros.usuarios.filter(usuario => (usuario.user == $user && usuario.pwd == $pwd)).length>0)
                    alert("Usuário já existente. TENTE outro usuário.")
                else {
                    var novoRegistro = JSON.stringify({"user":$user, "pwd":$pwd});
                    $("#user").val(novoRegistro);
                    //console.log($("#user").serialize());
                    let postagem = $.post("php/file.php", $("#user").serialize());
                    //let postagem = $.post("php/file.php", novoRegistro.serialize());
                    
                    postagem.done(function(resposta){
                        $("#user").val("");
                        $("#pwd").val("");
                        alert(resposta);
                    });
                }
            });
        }
        else alert("ERRO: Usuário e senha são necessários para logar");
    });
});