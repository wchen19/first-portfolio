import './App.css';
import Navbar from './components/Navbar';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Home from './sections/Home';
import Portfolio from './sections/Portfolio';

function App() {
  return (
    <>
      <Navbar />
      <div className='App'>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
