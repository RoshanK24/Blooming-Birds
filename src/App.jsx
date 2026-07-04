import { Orbs, useReveal } from './components/Background.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import { About, WhyUs, Programs, Activities, Method } from './components/Sections.jsx';
import { Gallery, Testimonials, Facilities, Admissions } from './components/Showcase.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useReveal();
  return (
    <>
      <Orbs />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Programs />
        <Activities />
        <Method />
        <Gallery />
        <Testimonials />
        <Facilities />
        <Admissions />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
