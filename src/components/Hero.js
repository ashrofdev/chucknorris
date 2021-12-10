import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Hero = ({setFilter}) => {

    const [search, setSearch] = useState('')
    return (
        <div className="hero">
            
            <h1 className="heading">The Joke Bible</h1>
            <h3>Daily laughs for you and yours</h3>

            <div className="filter-section">
                <input onChange={(e)=> setSearch(e.target.value)} className="input" placeholder="How can we make you laugh today"/>
                <div className="icon" onClick={()=> setFilter(search)}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
        </div>
    );
};

export default Hero;