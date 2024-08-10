import './App.css';
import { Navigation } from './components/Navigation.js';
import { Banner } from './components/Banner.js';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { Contact } from './components/Contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;