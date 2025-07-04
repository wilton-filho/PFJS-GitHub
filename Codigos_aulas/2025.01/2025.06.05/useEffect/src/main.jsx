// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//     <App />
// )

//------------------------------------------------------------------------------
// O que o Strict Mode faz?
// O React em modo estrito (<React.StrictMode>) executa certos efeitos duas vezes intencionalmente em desenvolvimento para ajudar a identificar efeitos colaterais que não são seguros.

// Então:
// O React monta o componente.
// Roda o useEffect.
// Simula uma desmontagem e montagem novamente para garantir que o efeito seja seguro.
// Roda o useEffect de novo.
// 👉 Isso só acontece em modo de desenvolvimento e não afeta o comportamento na versão final (produção).

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
