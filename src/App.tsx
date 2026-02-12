import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <div className="grid-bg"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;