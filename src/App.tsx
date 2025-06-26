import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-gray-50">
        <Navbar />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about" className="py-20">
            <About />
          </section>
          <section id="skills" className="py-20 dark:bg-gray-800 bg-gray-100">
            <Skills />
          </section>
          <section id="education" className="py-20">
            <Education />
          </section>
          <section id="projects" className="py-20 dark:bg-gray-800 bg-gray-100">
            <Projects />
          </section>
          <section id="contact" className="py-20">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;