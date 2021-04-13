<?php
    $vetorNovo = json_decode($_POST['user']);
    //$vetorNovo = json_decode($_POST['novoRegistro']);
    $registros = json_decode(file_get_contents("../json/users.json"), true);
    array_push($registros["usuarios"], $vetorNovo);
    file_put_contents("../json/users.json",json_encode($registros));
    echo("Usuario cadastrado com sucesso!");
?>