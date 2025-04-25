import getCats from "./thecatapi.js"

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnShowCats").addEventListener("click",showCats);
})

const showCats = async () => {
    showMsgAlerta("Processando. Aguarde...");
    const vetCats = await getCats();
    // Tem gato para exibir
    if (vetCats.length > 0) {
        const catPainel = document.getElementById("catPainel");
        vetCats.forEach(gato => {
            const img = document.createElement("img");
            img.src = gato.url;
            img.className = "cat";
            img.alt = "Gatinho";
            catPainel.appendChild(img);
        });
        showMsgAlerta("");
    }
    // Houve erro: sem gatos para exibir
    else {
        showMsgAlerta("Erro no carregamento dos gatos");
    }
}
const showMsgAlerta = (msg) => {
    document.getElementById("msgAlerta").innerHTML = msg;
}



