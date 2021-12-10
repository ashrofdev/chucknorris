import React from 'react';

const Hero = () => {
    return (
        <div className="hero">
            
            <h1 className="heading">The Joke Bible</h1>
            <h3>Daily laughs for you and yours</h3>

            <div className="filter-section">
                <input className="input" placeholder="How can we make you laugh today"/>
            </div>
        </div>
    );
};

export default Hero;