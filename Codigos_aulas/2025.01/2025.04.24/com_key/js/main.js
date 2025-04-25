import getCats from "./thecatapi.js"

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnShowCats").addEventListener("click",() => {
        showCats(document.getElementById("totalCats").value)
    });
})

const showCats = async (totalCats) => {
    showMsgAlerta("Processando. Aguarde...");
    const vetCats = await getCats(totalCats);
    // Tem gato para exibir
    if (vetCats.length > 0) {
        const catPainel = document.getElementById("catPainel");
        vetCats.forEach(gato => {
            const img = document.createElement("img");
            const parag = document.createElement("p");
            parag.textContent = gato.breeds[0].temperament;
            img.src = gato.url;
            img.className = "cat";
            img.alt = "Gatinho";
            catPainel.appendChild(img);
            catPainel.appendChild(parag);
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


