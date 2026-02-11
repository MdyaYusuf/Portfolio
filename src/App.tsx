import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';

function App() {
  return (
    <>
      <div className="grid-bg"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
      </main>
    </>
  );
}

export default App;