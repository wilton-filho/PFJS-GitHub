import getCats from "./thecatapi.js";

window.addEventListener("DOMContentLoaded", () => {

    document.getElementById("btnMostrarGatos").addEventListener("click", () => mostrarGatos());   
});

const mostrarGatos = async () => {
    msgAlerta("msgAlerta", "Aguardo. Carregando gatos...");
    const gatos = await getCats(6);
    gatos.length > 0 ? mostrarGatosPainel(gatos) : msgAlerta("msgAlerta", "Nenhum gato encontrado!");
    msgAlerta("msgAlerta", "");
}

const mostrarGatosPainel = (gatos) => {
    const painelGatos = document.getElementById("painelGatos");
    gatos.forEach(gato => {
        const img = document.createElement("img");
        img.src = gato;
        img.alt = "Gato";
        img.className = "gato";
        painelGatos.appendChild(img);
    });
}

const msgAlerta = (id, msg) => {
    document.getElementById(id).innerHTML = msg;;
}
