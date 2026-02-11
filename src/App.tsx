import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <div className="grid-bg"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;