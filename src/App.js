import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import { getCategories } from './ApiCalls';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Joke from './components/Joke';
import Jokes from './components/Jokes';
import './sytles/App.scss';

function App() {

  const [category, setCategory] = useState('')
  const [filter, setFilter] = useState('')
  const [route, setRoute] = useState('')
  const [selectedJoke, setSelectedJoke] = useState({})

 
  return (
    <div className="App">
      <Header/>
      <Hero setFilter={setFilter} />
    
          {
            route==='joke'?
            <Joke selectedJoke={selectedJoke}/>:
            <div>
            <Categories setCategory={setCategory}/>
             <Jokes setSelectedJoke={setSelectedJoke} setRoute={setRoute} filter={filter} category={category} />
            </div>
          }

           
           
      <Footer/>
    </div>
  );
}

export default App;
