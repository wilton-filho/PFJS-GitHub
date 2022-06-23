import React, { Component } from 'react';
import DepoimentoIndividual from './boxes/DepoimentoIndiv';

class Depoimentos extends Component {
    render() {
        return (
            <section>
                <div class="linha container">
                    <div class="col-dm-3">
                        <DepoimentoIndividual nome="Wilton"/>
                    </div>
                    <div class="col-dm-3">
                        <DepoimentoIndividual nome="Maria"/>
                    </div>
                    <div class="col-dm-3">
                        <DepoimentoIndividual nome="Ana"/>
                    </div>
                    <div class="col-dm-3">
                        <DepoimentoIndividual nome="Solange"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Depoimentos;