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

 
  return (
    <div className="App">
      <Header/>
      <Hero setFilter={setFilter} />
      <Router>
        <Routes>
          <Route path='/joke' element={<Joke/>}/>
          <Route path='/' element={
            <div>
            <Categories setCategory={setCategory}/>
             <Jokes filter={filter} category={category} />
            </div>
          }/>
           
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
