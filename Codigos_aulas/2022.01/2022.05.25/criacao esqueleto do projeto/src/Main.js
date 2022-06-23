import React, { Component } from 'react';
import Chamada from './sections/Chamada';
import Depoimentos from './sections/Depoimentos';

class Main extends Component {
    render() {
        return (
            <main>
                <Chamada/>
                <Depoimentos/>
            </main>
        );
    }
}

export default Main;