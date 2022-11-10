import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';

function App() {
  return (
    <>
     <Navbar />
     <Home />
     <About />
     <Pricing />
     <Contact />
    </>
  );
}

export default App;
