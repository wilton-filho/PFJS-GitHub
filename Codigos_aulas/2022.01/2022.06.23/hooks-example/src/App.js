import React, { Component } from 'react';
import Exemplo01SemHooks from './components/Exemplo01SemHooks';
import Exemplo01ComHooks from './components/Exemplo01ComHooks';
import Exemplo02SemHooks from './components/Exemplo02SemHooks';
import Exemplo02ComHooks from './components/Exemplo02ComHooks';

class App extends Component {
    render() {
        return (
            <div>
                <Exemplo01SemHooks/>
                <Exemplo01ComHooks/>
                <Exemplo02SemHooks/>
                <Exemplo02ComHooks/>
            </div>
        );
    }
}

export default App;