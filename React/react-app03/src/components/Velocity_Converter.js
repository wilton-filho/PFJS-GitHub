import React, { Component } from 'react';
import '../mystyles/styles.css';

class Velocity_Converter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            velocity: 0,
            velocityConverted: ""
        };
    }
    update = (event) => {
        this.setState({[event.target.name]: event.target.value});
        this.setState({velocityConverted: ""});
    }
    converter = (e) => {
        this.setState({velocityConverted: (this.state.velocity*0.621371).toFixed(3)});
        e.preventDefault();
    }
    render() {
        return (
            <div className="converterBox">
                <h2>Km para Milha</h2>
                <form>
                    <input type="text" name="velocity" onChange={this.update} placeholder="Km"/>
                    <button onClick={this.converter}>Converter</button>
                    <p>Milha: {this.state.velocityConverted}</p>
                </form>
            </div>
        );
    }
}

export default Velocity_Converter;