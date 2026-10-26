
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Approach from './components/Approach';
import Businesses from './components/Businesses';
import Opportunities from './components/Opportunities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <main id="top">
        <Hero />
        <Approach />
        <Businesses />
        <Opportunities />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
