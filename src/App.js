import './App.css';
import './Portfolio.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Story from './components/Story';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Story />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
