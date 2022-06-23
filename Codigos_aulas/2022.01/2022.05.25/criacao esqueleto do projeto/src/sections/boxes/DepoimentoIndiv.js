import React, { Component } from 'react';

class DepoimentoIndividual extends Component {
    render() {
        return (
            <div>
                <div>img</div>
                <div>{this.props.nome}</div>
                <div>sou um parágrafo .... sou um parágrafo .... sou um parágrafo ....</div>
            </div>
        );
    }
}

export default DepoimentoIndividual;
