import React, { Component } from 'react';
import UniversalConverter from './components/Universal_Converter';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <UniversalConverter/>
            </div>
        );
    }
}

export default App;