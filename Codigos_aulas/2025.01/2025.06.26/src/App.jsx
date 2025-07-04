import React from 'react';
import SecaoAutoridade from './SecaoAutoridade/SecaoAutoridade';
import Menu from './Menu/Menu';
import SobreNos from './SobreNos/SobreNos';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<SecaoAutoridade/>}/>
        <Route path="/sobre" element={<SobreNos/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;