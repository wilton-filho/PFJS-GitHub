import React, { Component } from 'react';
import Temp_Converter from './Temp_Converter';
import Velocity_Converter from './Velocity_Converter';

class Universal_Converter extends Component {
    render() {
        return (
            <main>
                <h1>Conversor Universal</h1>
                <Temp_Converter/>
                <Velocity_Converter/>
            </main>
        );
    }
}

export default Universal_Converter;