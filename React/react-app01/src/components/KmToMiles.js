import React, { Component } from 'react';
import '../mystyles/styles.css';

class KmToMiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            result: ""
        };
    }
    update = (event) => {
        this.setState({[event.target.name]: event.target.value, result: ""});
    }
    convert = () => {
        this.setState({result: (this.state.value*0.621371).toFixed(6)});
    }
    render() {
        return (
            <div className="converterBox">
                <h2>Km para Milha</h2>
                <input type="text" name="value" placeholder="Km" onChange={this.update}/>
                <button onClick={this.convert}>Converter</button>
                <p>Milha: {this.state.result}</p>
            </div>
        );
    }
}

export default KmToMiles;