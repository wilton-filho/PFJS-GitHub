import React, { Component } from 'react';
import '../css/style.css';

class Exemplo02SemHooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <section>
                <p>Valor atual: {this.state.count}</p>
                <button onClick={this.incrementar}>Adicionar</button>
            </section>
        );
    }
    incrementar = () => {
        this.setState({ count: this.state.count + 1 });
    }
}

export default Exemplo02SemHooks;