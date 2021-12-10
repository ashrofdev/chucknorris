import { useEffect, useState } from 'react';
import { getCategories } from './components/ApiCalls';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Jokes from './components/Jokes';
import './sytles/App.scss';

function App() {

  const [category, setCategory] = useState('')
  const [filter, setFilter] = useState('')

 
  return (
    <div className="App">
      <Header/>
      <Hero setFilter={setFilter} />
      <Categories setCategory={setCategory}/>
      <Jokes filter={filter} category={category} />
      <Footer/>
    </div>
  );
}

export default App;
