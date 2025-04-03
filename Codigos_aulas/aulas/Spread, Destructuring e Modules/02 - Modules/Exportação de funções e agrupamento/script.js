import {perimetro, area} from './modules/quadrado.js';
import mensagens from './modules/mensagens.js';

window.addEventListener("DOMContentLoaded", () => {
    console.log(perimetro(10));
    console.log(area(10));
    mensagens.mensagem1();
    mensagens.mensagem2();
})