import Contador from "./components/Contador";
import ContadorPlus from "./components/ContadorPlus";
import Mensagem from "./components/Mensagem";
import MostrarParagrafos from "./components/MostrarParagrafos";
import ShowName from "./components/ShowName";

export default function App() {
  return (
    <div>
      <Contador/>

      <ContadorPlus min={3} max={7}/>

      {/* O componente abaixo ira utilizar os valores padrões */}
      <ContadorPlus/>
      
      <ShowName/>
      
      <Mensagem max={10}/>
      
      {/* O componente abaixo ira utilizar o valor padrão */}
      <Mensagem/>

      <MostrarParagrafos/>
    </div>
  )
}

