import React, { Component } from 'react';
import '../mystyles/styles.css';

class Temp_Converter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: 0,
            valueConverted: ""
        };
    }
    update = (event) => {
        this.setState({[event.target.name]: event.target.value});
        this.setState({valueConverted: ""});
    }
    converter = (e) => {
        this.setState({valueConverted: (this.state.temperature*1.8 + 32).toFixed(3)});
        e.preventDefault();
    }
    render() {
        return (
            <div className="converterBox">
                <h2>Celsius para Fahrenheit</h2>
                <form>
                    <input type="text" name="temperature" onChange={this.update} placeholder="Cº"/>
                    <button onClick={this.converter}>Converter</button>
                    <p>Fahrenheit: {this.state.valueConverted}</p>
                </form>
            </div>
        );
    }
}

export default Temp_Converter;