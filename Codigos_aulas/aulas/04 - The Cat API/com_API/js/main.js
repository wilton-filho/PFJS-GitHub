import getCats from "./thecatapi.js";

window.addEventListener("DOMContentLoaded", () => {

    document.getElementById("btnMostrarGatos").addEventListener("click", () => mostrarGatos());   
});

const mostrarGatos = async () => {
    msgAlerta("msgAlerta", "Aguardo. Carregando gatos...");
    const gatos = await getCats(10);
    gatos.length > 0 ? mostrarGatosPainel(gatos) : msgAlerta("msgAlerta", "Nenhum gato encontrado!");
    msgAlerta("msgAlerta", "");
}

const mostrarGatosPainel = (gatos) => {
    console.log(gatos)
    const painelGatos = document.getElementById("painelGatos");
    gatos.forEach((gato) => {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figureCaption = document.createElement("figcaption");

        figure.className = "boxGato";
        img.src = gato.url;
        img.alt = "Gato";
        img.className = "gato";
        figureCaption.innerHTML = `${gato.breeds[0].name} <br><br> ${gato.breeds[0].description}<bR>`;

        figureCaption.appendChild(img);
        figure.appendChild(figureCaption);
        painelGatos.appendChild(figure);
    });
}

const msgAlerta = (id, msg) => {
    document.getElementById(id).innerHTML = msg;;
}
