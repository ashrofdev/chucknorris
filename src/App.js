import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Jokes from './components/Jokes';
import './sytles/App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Categories/>
      <Jokes/>
      <Footer/>
    </div>
  );
}

export default App;
