// Exemplo 03: Refatorando o Exemplo 01 usando Promise e async
$(document).ready(function() {
    $("#btnView").click(function() {
        showMsg().then(($msg) => {
            console.log($msg);
        });
    })
});

// Essa função é exatamente a mesma coisa da função abaixo
async function showMsg() {
    return "Hello World!";
}

/*function showMsg() {
    return Promise.resolve("Hello World!");
}*/