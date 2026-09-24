import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Project';
import Contact from './pages/contact';
import NotFound from './pages/NotFound';
import ProjectDetails from './Pages/ProjectDetails';


function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };
  return (
    <div> 
       <BrowserRouter>
      <div className="app-shell">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="page-content">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path= "*" element={<NotFound />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
