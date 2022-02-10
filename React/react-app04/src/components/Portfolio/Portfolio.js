import React, { Component } from 'react';
import PortfolioIntro from './PortfolioIntro';
import PortfolioProducts from './PortfolioProducts';

class Portfolio extends Component {
    render() {
        return (
            <main>
                <PortfolioIntro/>
                <PortfolioProducts/>
            </main>
        );
    }
}

export default Portfolio;
