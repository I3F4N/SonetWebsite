import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import WhyUs from './components/sections/WhyUs';
import Contact from './components/sections/Contact';

import Partners from './components/sections/Partners';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-cyan/30">
        <Navbar />
        <main>
          <Hero />
          <Partners />
          <Services />
          <WhyUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
