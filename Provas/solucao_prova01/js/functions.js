idTimer = null;

function readSelect() {
    tipoProduto = document.getElementById("listProducts").selectedIndex;
    clearTimeout(idTimer);
    if (tipoProduto == 0) {
        document.getElementById("panelProducts").className = "invisivel";
        alert("Favor selecionar um produto!");
    }
    else {
        document.getElementById("panelProducts").className = "visivel";
        if(tipoProduto == 1) readProducts('../json/smartphones.json')
        else if (tipoProduto == 2) readProducts('../json/geladeiras.json')
    }
}

async function readProducts(filename) {
    arquivo = await fetch(filename);
    conteudo = await arquivo.json();
    showProducts(conteudo, 0);
}

function showProducts(conteudo, i) {
    document.getElementById('marca').innerHTML = conteudo.itens[i].marca;
    document.getElementById('modelo').innerHTML = conteudo.itens[i].modelo;
    document.getElementById('preco').innerHTML = conteudo.itens[i].preco;
    document.getElementById('fotoProduto').src = conteudo.itens[i].foto;
    i = (i < conteudo.itens.length-1)?i+1:0;
    idTimer = setTimeout(showProducts, 1000, conteudo, i);
}
