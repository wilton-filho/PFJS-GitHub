import React, { Component } from 'react';
import '../css/style.css';

class Home extends Component {
    render() {
        return (
            <main className="mainHome"> 
                <h1>Home</h1>
                <p>Clique aqui para abrir o <a href="http://www.google.com">Google</a></p>
            </main>
        );
    }
}

export default Home;