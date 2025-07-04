import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './componentes/Menu';
import FaleConosco from './componentes/FaleConosco';
import Main from './componentes/Main';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/faleconosco" element={<FaleConosco/>}/>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;