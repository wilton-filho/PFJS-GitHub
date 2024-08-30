import React from 'react';
import Index from './componentes/Index/Index';
import Contato from './componentes/Contato/Contato';
import Menu from './componentes/Menu/Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreNos from './componentes/SobreNos/SobreNos';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/sobrenos" element={<SobreNos/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;