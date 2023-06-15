import { useEffect, useState } from "react"

export default function Faq() {

  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("https://wilton-filho.github.io/PFJS-GitHub/React/projeto/json/faq2.json")
      .then(file => file.json())
      .then(conteudo => setFaqs(conteudo.faqs))
  },[]);

  function getFaqs() {
    return (
      faqs.map((faq,indice) => { return <details key={indice}><summary>{faq.pergunta}</summary><p>{faq.resposta}</p></details>})  
    )
  }

  return (
    <div>
      {getFaqs()}
    </div>
  )
}

