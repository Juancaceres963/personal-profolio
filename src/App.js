 import './App.css';
 import { useEffect } from "react";
 import { useLocation } from "react-router-dom";
 import BackgroundVideo from './components/BackgroundVideo.js';
 import { Navigation } from './components/Navigation.js';
 import { Banner } from './components/Banner.js';
 import { Skills } from './components/Skills.js';
 import { Projects } from './components/Projects.js';
//  import { Contact } from './components/Contact.js';
 import { Footer } from './components/Footer.js';
 import { ProjectDetails } from './components/ProjectDetails.js'; // Importa la página de detalles
 import 'bootstrap/dist/css/bootstrap.min.css';
 import "bootstrap/dist/js/bootstrap.bundle.min.js";
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//**********  Version n3 del dia de hoy 26/03 *************//
function App() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <BackgroundVideo />
            <Banner />
            <Skills />
            <Projects />
            <Footer />
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;