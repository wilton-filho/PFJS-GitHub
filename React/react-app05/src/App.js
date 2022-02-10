import React, { Component } from 'react';
import Menu from './components/Menu'
import Home from './components/Home'
import Sobre from './components/Sobre'
import FaleConosco from './components/FaleConosco'

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <Menu/>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/sobre"><Sobre/></Route>
                <Route exact path="/faleconosco"><FaleConosco/></Route>
            </Router>
        );
    }
}

export default App;