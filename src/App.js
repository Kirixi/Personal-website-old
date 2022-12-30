import './App.css';
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import Skils from './Components/Skils';
import Projects from './Components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skils />
      <Projects />
    </div>
  );
}

export default App;
