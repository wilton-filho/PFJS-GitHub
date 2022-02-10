import React, { Component } from 'react';
import PortfolioIntro from './PortfolioIntro';
import PortfolioProducts from './PortfolioProducts';
import PortfolioDetais from './PortfolioDetais';

class Portfolio extends Component {
    render() {
        return (
            <>
                <PortfolioIntro/>
                <PortfolioProducts/>
                <PortfolioDetais/>
            </>
        );
    }
}

export default Portfolio;