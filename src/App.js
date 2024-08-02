import './App.css';
import { Navigation } from './components/Navigation.js';
import { Banner } from './components/Banner.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Banner />
    </div>
  );
}

export default App;