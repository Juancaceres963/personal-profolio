import './App.css';
import BackgroundVideo from './components/BackgroundVideo.js'
import { Navigation } from './components/Navigation.js';
import { Banner } from './components/Banner.js';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { Contact } from './components/Contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <BackgroundVideo />
      <Navigation/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;