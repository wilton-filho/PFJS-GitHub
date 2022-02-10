import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Sobre from './components/Sobre/Sobre';
import Home from './components/Home/Home';
import FaleConosco from './components/FaleConosco/FaleConosco';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio/>
                    </Route>
                    <Route path="/sobre">
                        <Sobre/>
                    </Route>
                    <Route path="/faleconosco">
                        <FaleConosco/>
                    </Route>
                </Switch>

                <Footer/>
            </Router>
        );
    }
}

export default App;

/*<Header/>
                <Switch>
                    <Route path="/portfolio">
                        <PortfolioIntro/>
                        <PortfolioProducts/>
                        <PortfolioDetais/>
                    </Route>
                <Switch/>           
                <Footer/>*/