import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

function App() {
  return (
    <>
      <div className="grid-bg"></div>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;