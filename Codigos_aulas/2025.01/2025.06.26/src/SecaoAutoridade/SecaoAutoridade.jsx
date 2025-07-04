import React from "react";
import Autoridade from "./Autoridade/Autoridade";
import autoridades from "./descricoes.jsx"

function SecaoAutoridade() {
  return (
    <section>
      <Autoridade imagem={autoridades[0].imagem} texto={autoridades[0].descricao} />
    </section>
  );
}

export default SecaoAutoridade;
