import './App.css';
import Navbar from './components/Navbar';
import About from './sections/About';
import Contact from './sections/Contact';
import Home from './sections/Home';
import Portfolio from './sections/Portfolio';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
