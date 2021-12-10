import React, { useEffect, useState } from 'react';

const Joke = ({selectedJoke}) => {
    // const history = useNavigate()
    const joke = selectedJoke

    useEffect(()=>{
        // console.log(history)
        // setJoke(window.history.state.usr)
    },[])
    return (
        <div className="grid single-joke">
            <div className="grid-content">
                <div className="joke">
                    {/* <h3>{joke.categories[0] || 'Random'} joke</h3> */}
                    <p>{joke.value}</p>

                </div>
            </div>
            
        </div>
    );
};

export default Joke;