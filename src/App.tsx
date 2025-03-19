import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './sections/AboutMe';
import Academics from './sections/Academics';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

import { ThemeProvider } from './Context/ThemeContext';
import { LanguageProvider } from './Context/LanguageContext';


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen w-full">
          <Navbar />
          <AboutMe />
          <Academics />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;