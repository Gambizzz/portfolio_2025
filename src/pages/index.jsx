import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <Hero />

      <section id="next-section">
        <Navbar />
        <main>
          <About />
          <Skills />
          <Projects />
        </main>
      </section>
    </>
  );
}