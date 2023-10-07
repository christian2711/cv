
import './App.css';
import About from "./components/Abaut";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Proyects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font" >
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Testimonials />
    <Contact />
  </main>
  );
}

export default App;
