import React, { useEffect, useState } from 'react';
import { getJokeByCategory, searchJokes } from './ApiCalls';

const Jokes = ({category, filter}) => {

    const [jokes, setJokes] = useState([])
    const [page, setPage] = useState(0)

    useEffect(()=>{
        if(filter===''){
            getDefaultJokes('cat')
        }else {
            getDefaultJokes(filter)
        }
        
    },[filter])

    useEffect(()=>{
        getJokeByCategory(category).then(e=>{
            console.log(e.data)
            setJokes([e.data])
        })
    },[category])

    const getDefaultJokes = (query) => {
        searchJokes(query).then(e=>{
            setJokes([...e.data.result])
            console.log(e.data.result)
        })
    } 

    return (
        <div className="grid">
            <div className="grid-content jokes">
                <p className="header">{category} joke</p>

                <div className="joke-list">
                    {
                        jokes.map(joke=> <div className="joke">
                                            <h3>{joke.categories[0] || 'Random'} joke</h3>
                                            <p>{joke.value}</p>

                                            <div className="cta">
                                                <button className="btn">see stats &rarr;</button>
                                            </div>
                                        </div>).slice(9*page, 9*(page+1))
                    }
                    <div className="cta">
                        <button onClick={()=>{
                            if(page>0){
                                setPage(page-1)
                            }
                        }}>prev</button>
                        <button onClick={()=>{
                            if(page+1 < jokes.length/9){
                                setPage(page+1)
                            }
                        }}>nexte</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Jokes;