import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Servicos from './components/Servicos';
import Contatos from './components/Contatos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/servicos' element={<Servicos />} />
        <Route path='/contatos' element={<Contatos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}