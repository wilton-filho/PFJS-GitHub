import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home'
import SobreNos from './components/SobreNos'
import Contatos from './components/Contatos'
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/sobrenos" element={<SobreNos/>}/>
                    <Route path="/contatos" element={<Contatos/>}/>
                </Routes>
                <Footer/>
            </Router>
        );
    }
}

export default App;
